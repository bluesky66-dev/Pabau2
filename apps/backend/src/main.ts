import { NowRequest, NowResponse } from '@vercel/node'
import { AppModule } from './app/app.module'
import { NestFactory } from '@nestjs/core'
import { AppController } from './app/app.controller'

function invokeNest(req: NowRequest, res: NowResponse) {
  NestFactory.create(AppModule).then(async e => {
    const app2 = e.get(AppController)
    res.json(await app2.getData())
  })
}

export default function(req: NowRequest, res: NowResponse) {
  invokeNest(req, res)
}
