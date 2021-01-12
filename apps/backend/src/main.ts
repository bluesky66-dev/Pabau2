import { NowRequest, NowResponse } from '@vercel/node'
import { AppModule } from './app/app.module'
import { NestFactory } from '@nestjs/core'
import { AppController } from './app/app.controller'
import { Logger } from '@nestjs/common'

async function bootstrapDevServer() {
  const app = await NestFactory.create(AppModule)
  // const globalPrefix = 'api'
  // app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/')
  })
}

if (!process.env.VERCEL) {
  console.log("STARTING DEV SERVER")
  bootstrapDevServer()
}

function invokeNest(req: NowRequest, res: NowResponse) {
  NestFactory.create(AppModule).then(async e => {
    const app2 = e.get(AppController)
    res.json(await app2.getData())
  })
}

export default function(req: NowRequest, res: NowResponse) {
  invokeNest(req, res)
}
