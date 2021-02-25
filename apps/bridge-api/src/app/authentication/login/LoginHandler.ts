import { ServerResponse } from "http";
import { LoginInputDto } from "../dto/loginInput.dto";
import { PrismaClient } from '@prisma/client'
import { User } from "../dto/user.dto";
import jwt from 'jsonwebtoken'
import { UnauthorizedException } from "@nestjs/common";
import { JwtPayloadDto } from "../dto/jwtPayload.dto";

interface ExtendedRequest extends NodeJS.ReadStream {
  input: string;
}

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
    this.user = await this.prisma.user.findMany({
      where: {username: {equals: this.loginInput.username}}
    });
    return jwt.sign({
      'username': this.user[0].id,
      'company': this.user[0].company
    }, 'asdasdasd')
  }
}
