import { SendGridModule } from "@anchan828/nest-sendgrid";
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
    imports :[
        SendGridModule.forRoot({
            apikey: process.env.SEND_GRID_ACCESS_KEY,
        })
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}