import { Injectable } from '@nestjs/common'
import logger from '../lib/logger'
import { yup } from '@pabau/yup'

@Injectable()
export class AppService {
  getData(data?: any): { message: string } {
    if (data) logger(data);
    return { message: 'Welcome to backend! This should say yup --> ' + yup() + JSON.stringify(data) }
  }


}
