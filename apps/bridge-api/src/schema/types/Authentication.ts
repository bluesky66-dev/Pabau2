import { extendType, nonNull, stringArg } from 'nexus';
import jwt from "jsonwebtoken";
import { User } from '../../app/authentication/dto/user.dto'
import { createHash } from 'crypto'
import * as crypto from "crypto";


export const Authentication = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'String',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_root, {username, password}, ctx) {
        if(!username && !password){
          throw new Error("Unauthorized access")
        }
        const hash = crypto.createHash('md5').update(password).digest('hex')
        try{
          const user: User[] = await ctx.prisma.user.findMany({
            where: {
              username: {
                equals: username
              },
              password: {
                equals: hash
              }
            },
          })
          return jwt.sign({
            'user': user[0].id,
            'company': user[0].company,
            'https://hasura.io/jwt/claims': {
              "x-hasura-allowed-roles": [
                "public","admin"
              ],
              "x-hasura-default-role": "public",
              "x-hasura-user-id": "1234567890",
              "x-hasura-org-id": "123",
              "x-hasura-james": "123"
            }
          }, 'madskills')
        } catch {
          throw new Error("Unauthorized access")
        }
      },
    });
  },
});
