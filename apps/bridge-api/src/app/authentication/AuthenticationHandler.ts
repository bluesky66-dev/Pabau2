import { LoginInputDto, JwtPayloadDto, UserDto as User } from "./dto";
import jwt from 'jsonwebtoken'
import { Context } from "../../types";
import * as crypto from "crypto";

export class AuthenticationHandler {

  private user:User[];

  public constructor(private ctx: Context, private loginInput:LoginInputDto) {}

  //TODO Refactor once company select screen is defined
  public async handleLoginRequest(): Promise<string> {
    const { username, password }:LoginInputDto = this.loginInput;
    const hash = await AuthenticationHandler.generateHash(password, 'md5');
    this.user = await this.ctx.prisma.user.findMany({
      where: {
        username: {
          equals: username
        },
        password: {
          equals: hash
        }
      },
    })
    return this.generateJWT();
  }

  private static async generateHash(password:string, encryption:string): Promise<string>{
    try{
      return crypto.createHash(encryption).update(password).digest('hex');
    } catch {
      throw new Error("Unauthorized access")
    }
  }

  private async generateJWT(): Promise<string>{
    if(!this.user || Object.getOwnPropertyNames(this.user).length === 0){
      throw new Error("Unauthorized access");
    }
    const token: JwtPayloadDto = {
      'username': this.user[0].id,
      'company': this.user[0].company,
      'https://hasura.io/jwt/claims': {
        "x-hasura-allowed-roles": [
          "public","admin"
        ],
        "x-hasura-default-role": "public",
        "x-hasura-user-id": this.user[0].id,
        "x-hasura-org-id": this.user[0].company,
        "x-hasura-james": 123
      }
    }
    return jwt.sign(token, 'madskills')
  }
}
