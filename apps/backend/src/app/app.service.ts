import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'

interface JsonType {
  results: { name: { first: string; last: string } }
}

@Injectable()
export class AppService {
  async getData(): Promise<JsonType> {
    const data = await fetch('https://randomuser.me/api/')
    const json = await data.json()
    return json as JsonType
    //if (data) logger(data);
  }
}
