import { extendType, intArg, nonNull, stringArg } from 'nexus';
import { AuthenticationService } from "../../app/authentication/AuthenticationService";
import { Context } from "../../context";
import { LoginInputDto, LogoutInputDto } from "../../app/authentication/dto";

export const Authentication = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'String',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_,loginInput:LoginInputDto, ctx:Context) {
        if(ctx.req?.authenticatedUser){
          return ctx.req.session.jwt
        }
        if(!loginInput.username || !loginInput.password){
          throw new Error('Malformed Parameters')
        }
        try{
          const token = await new AuthenticationService(ctx).handleLoginRequest(loginInput);
          ctx.req.session = {
            jwt: token
          }
          return token
        } catch (error){
          console.error(error)
          throw new Error('Unauthorized access')
        }
      },
    });
    t.field('logout', {
      type: 'Boolean',
      args: {
        userId: nonNull(intArg())
      },
      async resolve(_, logoutInput:LogoutInputDto, ctx:Context){
        console.log('request auth')
        console.log(ctx.req.authenticatedUser)
        if(!ctx.req.authenticatedUser){
          throw new Error('Invalid token')
        }
        if (!logoutInput.userId){
          throw new Error('Malformed Parameters')
        }
        try{
          const userExists = await new AuthenticationService(ctx).handleLogoutRequest(logoutInput);
          console.log(userExists)
          if (userExists){
            ctx.req.session = null;
            return true;
          }
          return false
        } catch (error) {
          console.error(error)
          throw new Error('Something went wrong please try again')
        }
      }
    })
    t.field('authenticatedUser', {
      type: 'User',
      async resolve(_, args, ctx:Context){
        console.log(ctx)
        if(!ctx.req.authenticatedUser){
          throw new Error('Unauthorized access')
        }
        return ctx.prisma.user.findFirst({
          where: {
            id: ctx.req.authenticatedUser.user
          }
        })
      }
    })
  },
});
