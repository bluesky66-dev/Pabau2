import { ServerResponse } from "http";
import { LoginInputDto } from "../dto/loginInput.dto";
import { PrismaClient } from '@prisma/client'
import { User } from "../dto/user.dto";
import jwt from 'jsonwebtoken'
import { UnauthorizedException } from "@nestjs/common";
import { JwtPayloadDto } from "../dto/jwtPayload.dto";

export class LoginHandler {

  private result: ServerResponse;
  private prisma:PrismaClient;
  private user:User[];
  private loginInput: LoginInputDto;

  public constructor(request, result: ServerResponse) {
    const { data } = request.body.input;
    this.prisma = new PrismaClient();
    this.loginInput = data;
    this.result = result;
  }

  public async handleRequest(): Promise<string> {
    console.log(this.loginInput.username)
    this.user = await this.prisma.user.findMany({
      where:{username:{equals:this.loginInput.username}}
    });
    if(!this.user[0].id){
      throw new UnauthorizedException('Invalid credentials')
    }
    return jwt.sign({
      'username': this.user[0].email,
      'company': this.user[0].company
    }, 'asdasdasd')
  }
}
