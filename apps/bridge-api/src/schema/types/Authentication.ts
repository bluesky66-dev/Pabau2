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
      async resolve(_root, args, ctx) {
        if(!args.username && !args.password){
          throw new UnauthorizedException()
        }
        const user = await ctx.prisma.user.findMany({
          where: {username: {equals: args.username}}
        })
        return jwt.sign({
          'username': user[0].username,
          'company': user[0].company,
          'X-Hasura-James': '123'
        }, 'madskills')
      },
    });
  },
});
