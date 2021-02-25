import { extendType, nonNull, stringArg } from 'nexus';
import jwt from "jsonwebtoken";
import { UnauthorizedException } from "@nestjs/common";


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
        console.log(username)
        console.log(password)
        if(!username && !password){
          throw new UnauthorizedException()
        }
        const user = await ctx.prisma.user.findMany({
          where: {
            username: {
              equals: username
            }
          }
        })
        return jwt.sign({
          'username': user[0].username,
          'company': user[0].company,
          'X-Hasura-James': '123',
          'https://hasura.io/jwt/claims': {
            "x-hasura-allowed-roles": ["editor","user", "mod"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": "1234567890",
            "x-hasura-org-id": "123",
            "x-hasura-custom": "custom-value"
          }
        }, 'madskills')
      },
    });
  },
});
