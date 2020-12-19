import { Injectable } from '@nestjs/common'
import { yup } from '@pabau/yup'
import logger from '../lib/logger'

@Injectable()
export class AppService {
  getData(): { message: string } {
    logger("test!");
    return { message: 'Welcome to backend! This should say yup --> ' + yup() }
  }


}
