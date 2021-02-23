import { SendGridModule } from "@anchan828/nest-sendgrid";
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { environment } from "../../environments/environment";

@Module({
    imports :[
        SendGridModule.forRoot({
            apikey: environment.SEND_GRID_ACCESS_KEY,
        })
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}
