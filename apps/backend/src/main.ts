// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */
//
// import { Logger } from '@nestjs/common'
// import { NestFactory } from '@nestjs/core'
//
// import { AppModule } from './app/app.module'
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule)
//   // const globalPrefix = 'api'
//   // app.setGlobalPrefix(globalPrefix)
//   const port = process.env.PORT || 3333
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/')
//   })
// }
//
// bootstrap()

import { NowRequest, NowResponse } from '@vercel/node'
import { AppModule } from './app/app.module'
import { NestFactory } from '@nestjs/core'
import { AppController } from './app/app.controller'

function invokeNest(req: NowRequest, res: NowResponse) {
  NestFactory.create(AppModule).then(e => {
    const app2 = e.get(AppController)
    res.json(app2.getData())
  })
}

export default function(req: NowRequest, res: NowResponse) {
  invokeNest(req, res)
}
