import { objectType, extendType } from 'nexus';

export const TwoFactorHistory = objectType({
  name: 'TwoFactorHistory',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.passcode();
    t.model.user_id();
    t.model.request_date();
    t.model.is_confirmed();
    t.model.company();
  },
});

export const twoFactorHistoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.twoFactorHistory();
    t.crud.twoFactorHistories({ filtering: true, ordering: true });

    t.field('twoFactorHistoriesCount', {
      type: 'Int',
      args: {
        where: 'TwoFactorHistoryWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.twoFactorHistory.count(args);
      },
    });
  },
});

export const twoFactorHistoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTwoFactorHistory();
    t.crud.updateOneTwoFactorHistory();
    t.crud.upsertOneTwoFactorHistory();
    t.crud.deleteOneTwoFactorHistory();

    t.crud.updateManyTwoFactorHistory();
    t.crud.deleteManyTwoFactorHistory();
  },
});
