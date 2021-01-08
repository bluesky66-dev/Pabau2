import { Injectable } from '@nestjs/common'
import logger from '../lib/logger'
import { yup } from '@pabau/yup'
import { version } from '../../../../package.json'

@Injectable()
export class AppService {
  getData(data?): { message: string } {
    if (data) logger(data);
    return { message: `Welcome to backend v${version}! This should say yup --> ` + yup() + JSON.stringify(data) }
  }


}
