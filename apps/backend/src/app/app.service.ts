import { Injectable } from '@nestjs/common'
import { yup } from '@pabau/yup'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to backend! This should say yup --> ' + yup() }
  }
}
