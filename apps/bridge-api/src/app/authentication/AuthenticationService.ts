import { LoginInputDto, JwtPayloadDto} from "./dto";
import { User } from '../../schema/types'
import jwt from 'jsonwebtoken'
import { Context } from "../../context";
import * as crypto from "crypto";
import { BinaryToTextEncoding } from "crypto";

export class AuthenticationService {

  public user:User[];

  public constructor(private ctx: Context, private loginInput:LoginInputDto) {}
  //TODO Refactor once company select screen is defined
  public async handleLoginRequest(): Promise<string> {
    const users: User[] =  await this.ctx.prisma.user.findMany({
      where: {
        username: {
          equals: this.loginInput.username
        },
      },
    })
    this.user = users.filter(currentUser => {
      return Promise.resolve(this.verifyPassword(currentUser, this.loginInput.password))
    })
    console.log((this.user))
    if(!this.user || Object.getOwnPropertyNames(this.user).length === 0){
      throw new Error('Unauthorized access');
    }
    return this.generateJWT('madskills');
  }
  protected async generateHash(password:string, encryption:string, encoding:BinaryToTextEncoding): Promise<string>{
      return crypto.createHash(encryption).update(password).digest(encoding);
  }

  private async verifyPassword(user: User, password: string): Promise<string> {
    if(user.password_algor === 1){
      return this.generateHash(password, 'md5', 'hex');
    } if (user.password_algor === 2) {
      return this.generateHash(user.salt + password + user.salt, 'sha1', 'hex');
    }
    throw new Error('Password algorithm not supported')
  }
  private async generateJWT(key: string): Promise<string>{
    return jwt.sign(<JwtPayloadDto> {
      'user': this.user[0].id,
      'company': this.user[0].company_id,
      'username': this.user[0].username,
      'https://hasura.io/jwt/claims': {
        "x-hasura-allowed-roles": [
          'public','admin'
        ],
        'x-hasura-default-role': 'public',
        'x-hasura-user-id': this.user[0].id,
        'x-hasura-org-id': this.user[0].company_id,
        'x-hasura-james': 123
      }
    }, key)
  }
}
