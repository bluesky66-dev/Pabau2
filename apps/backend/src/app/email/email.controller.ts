/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Post, Body } from '@nestjs/common'
import { EmailService } from './email.service'

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('notification-email')
  async sendEmail(@Body() data: any ): Promise<{success:boolean, message?: string}> {
    if(!data.email) {
      return {success: false, message: "email is required"}
  }
   await this.emailService.sendEmail(data.email , data.bodyContent, data.subject);
   return {success:true}
  }
}
