import { objectType, extendType } from 'nexus';

export const ping = extendType({
  type: 'Query',
  definition(t) {
    t.field('ping', {
      type: 'String',
      async resolve(_root, args, ctx) {
        return "pong";
      },
    });
  },
});
