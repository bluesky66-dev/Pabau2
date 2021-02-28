import { extendType, nonNull, stringArg } from 'nexus';
import { AuthenticationService } from "../../app/authentication/AuthenticationService";
import { Context } from "../../context";
import { LoginInputDto, LoginOutputDto } from "../../app/authentication/dto";

export const Authentication = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'User',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_root, loginInput:LoginInputDto, ctx:Context) {
        if(!loginInput.username || !loginInput.password){
          throw new Error("Malformed Parameters")
        }
        try{
          const authenticatedUser = new AuthenticationService(ctx, loginInput);
          ctx.req.session = {
            jwt: await authenticatedUser.handleLoginRequest()
          }
          return authenticatedUser.user[0]
        } catch {
          throw new Error("Unauthorized access")
        }
      },
    });
  },
});
