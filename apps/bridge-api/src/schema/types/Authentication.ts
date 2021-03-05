import { extendType, nonNull, stringArg } from 'nexus';
import { AuthenticationService } from "../../app/authentication/AuthenticationService";
import { Context } from "../../context";
import { LoginInputDto } from "../../app/authentication/dto";

export const Authentication = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'String',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_root,loginInput:LoginInputDto, ctx:Context) {
        if(!loginInput.username || !loginInput.password){
          throw new Error("Malformed Parameters")
        }
        try{
          const token = new AuthenticationService(ctx, loginInput).handleLoginRequest();
          ctx.req.session = {
            jwt: await token
          }
          return await token
        } catch {
          throw new Error("Unauthorized access")
        }
      },
    });
  },
});
