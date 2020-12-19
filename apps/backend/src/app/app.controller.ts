import { Body, Controller, Get, Post } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Post()
  getData2(@Body() post) {
    return this.appService.getData(post)
  }
}
