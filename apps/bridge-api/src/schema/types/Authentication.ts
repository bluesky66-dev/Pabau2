import { extendType, nonNull, stringArg } from 'nexus';
import { AuthenticationHandler } from "../../app/authentication/AuthenticationHandler";
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
      async resolve(_root, loginInput:LoginInputDto, ctx:Context) {
        if(!loginInput.username || !loginInput.password){
          throw new Error("Unauthorized access")
        }
        try{
          return await new AuthenticationHandler(ctx, loginInput).handleLoginRequest()
        } catch {
          throw new Error("Unauthorized access")
        }
      },
    });
  },
});
