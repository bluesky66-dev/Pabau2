import { Injectable } from '@nestjs/common'
import { yup } from '@pabau/yup'
import logger from '../lib/logger'

@Injectable()
export class AppService {
  getData(data?: any): { message: string } {
    if (data) logger(data);
    return { message: 'Welcome to backend! This should say yup --> ' + yup() + JSON.stringify(data) }
  }


}
