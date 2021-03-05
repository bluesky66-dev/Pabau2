import { objectType, extendType } from 'nexus';

export const ClassSmsHistory = objectType({
  name: 'ClassSmsHistory',
  definition(t) {
    t.model.id();
    t.model.class_id();
    t.model.user_id();
    t.model.message();
    t.model.datetime();
  },
});

export const classSmsHistoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classSmsHistory();
    t.crud.classSmsHistories({ filtering: true, ordering: true });

    t.field('classSmsHistoriesCount', {
      type: 'Int',
      args: {
        where: 'ClassSmsHistoryWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classSmsHistory.count(args);
      },
    });
  },
});

export const classSmsHistoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassSmsHistory();
    t.crud.updateOneClassSmsHistory();
    t.crud.upsertOneClassSmsHistory();
    t.crud.deleteOneClassSmsHistory();

    t.crud.updateManyClassSmsHistory();
    t.crud.deleteManyClassSmsHistory();
  },
});
