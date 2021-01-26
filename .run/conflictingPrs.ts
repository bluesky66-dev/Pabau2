import { execSync } from 'child_process'
import {join} from 'path'
console.log("Starting", process.cwd(), "in", __dirname)
import { Bitbucket } from 'bitbucket'
import fetch from 'node-fetch'
const env = require('dotenv').config({debug:true, path:join(__dirname, ".env")})
console.log("token=", env)
if (!process.env.BITBUCKET_REFRESH_TOKEN) {
  process.exit(1);
}
const bbConfig = {
  workspace: 'pabau',
  repo_slug: 'monorepo',
};

(async () => {
  console.log("...")
  const accessToken = await fetch('https://bitbucket.org/site/oauth2/access_token', {
    method: 'POST',
    headers: {
      authorization: `Basic ${Buffer.from(process.env.BITBUCKET_REFRESH_TOKEN).toString('base64')}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
    .then(async (e) => {
      console.log("got token response")
      const clonedStream = e.clone();
      try {
        return await e.json();
      } catch (e) {
        console.log("e", e)
        console.log(await clonedStream.text())
        throw new Error("err")
      }
    })
    .then((e) => e.access_token)
  console.log("accesS_token", accessToken)
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
  for (const e of bbList) {
    console.log(e.source.commit.hash)
    console.log(execSync(`git checkout ${e.source.commit.hash}`).toString())
  }
})();
