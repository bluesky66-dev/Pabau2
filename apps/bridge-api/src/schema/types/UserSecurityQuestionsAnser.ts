import { objectType, extendType } from 'nexus';

export const UserSecurityQuestionsAnser = objectType({
  name: 'UserSecurityQuestionsAnser',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.question();
    t.model.question_no();
    t.model.answer();
    t.model.users();
  },
});

export const userSecurityQuestionsAnserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.userSecurityQuestionsAnser();
    t.crud.userSecurityQuestionsAnsers({ filtering: true, ordering: true });

    t.field('userSecurityQuestionsAnsersCount', {
      type: 'Int',
      args: {
        where: 'UserSecurityQuestionsAnserWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.userSecurityQuestionsAnser.count(args);
      },
    });
  },
});

export const userSecurityQuestionsAnserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUserSecurityQuestionsAnser();
    t.crud.updateOneUserSecurityQuestionsAnser();
    t.crud.upsertOneUserSecurityQuestionsAnser();
    t.crud.deleteOneUserSecurityQuestionsAnser();

    t.crud.updateManyUserSecurityQuestionsAnser();
    t.crud.deleteManyUserSecurityQuestionsAnser();
  },
});
