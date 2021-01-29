import { execSync } from 'child_process'
import { join } from 'path'
console.log('Starting', process.cwd(), 'in', __dirname)
const child_process = require('child_process')
import { Bitbucket } from 'bitbucket'
import fetch from 'node-fetch'
const env = require('dotenv').config({
  debug: true,
  path: join(__dirname, '.env'),
})
console.log('token=', env)
if (!process.env.BITBUCKET_REFRESH_TOKEN) {
  process.exit(1)
}
const bbConfig = {
  workspace: 'pabau',
  repo_slug: 'monorepo',
}

;(async () => {
  console.log('...')
  const accessToken = await fetch(
    'https://bitbucket.org/site/oauth2/access_token',
    {
      method: 'POST',
      headers: {
        authorization: `Basic ${Buffer.from(
          process.env.BITBUCKET_REFRESH_TOKEN
        ).toString('base64')}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    }
  )
    .then(async (e) => {
      console.log('got token response')
      const clonedStream = e.clone()
      try {
        return await e.json()
      } catch (e) {
        console.log('e', e)
        console.log(await clonedStream.text())
        throw new Error('err')
      }
    })
    .then((e) => e.access_token)
  console.log('accesS_token', accessToken)
  const bb = new Bitbucket({
    auth: {
      token: accessToken,
    },
    request: {
      timeout: 120 * 1000,
    },
  })
  const bbList = await bb.pullrequests
    .list({
      //page: "1",
      pagelen: 50,
      state: 'OPEN',
      ...bbConfig,
    })
    .then((e) => e.data.values)
  child_process.spawnSync(`git`, [`fetch`])
  for (const e of bbList) {
    //console.log(e.author.display_name)

    const checkout = child_process.spawnSync(`git`, [
      `checkout`,
      `${e.source.commit.hash}`,
    ])
    //console.log("proc.status=", checkout.status);
    if (checkout.status > 0) {
      console.error("can't do git checkout, is your work tree clean?")
      console.log(checkout.stderr.toString())
      process.exit(1)
    }

    const merge = child_process.spawnSync(`git`, [
      `merge`,
      `origin/master`,
      `--no-commit`,
      '--no-ff',
    ])
    if (merge.status > 0) {
      //console.log(`${e.author.display_name}: ${e.source.branch.name}`);
      merge.stdout
        .toString()
        .split('\n')
        .forEach((e) => {
          if (e.substr(0, 8) === 'CONFLICT') {
            //console.log(e)
          }
        })
      //console.log();
    } else {
      //console.log("OK"); //, merge.stdout.toString(), merge.stderr.toString())
      const approvals = e.participants?.reduce(
        (a, c) => a + (c.approved ? 1 : 0),
        0
      )
      console.log(
        `${e.author.display_name}: ${e.source.branch.name}: ${approvals}: ${e.links.html.href}`
      )
    }

    child_process.spawnSync(`git`, [`reset`, `--hard`])
  }

  child_process.spawnSync(`git`, [`checkout`, `master`])
})()
