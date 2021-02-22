import { Injectable } from '@nestjs/common'
import { SendGridService } from "@anchan828/nest-sendgrid";

@Injectable()
export class EmailService {

    constructor(private readonly sendGrid: SendGridService) {}

    async sendEmail(email: string , bodyContent: string, subject: string): Promise<{success:boolean, message?: string}>{
        await this.sendGrid.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: subject,
        html: bodyContent,
    });
        return {success : true};
    }
}