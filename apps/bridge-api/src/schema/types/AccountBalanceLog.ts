import { objectType, extendType } from 'nexus';

export const AccountBalanceLog = objectType({
  name: 'AccountBalanceLog',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.insurance_company_id();
    t.model.amount();
    t.model.date_time();
    t.model.product_id();
    t.model.description();
    t.model.sale_id();
    t.model.referral_id();
    t.model.imported();
    t.model.ref_sale_id();
  },
});

export const accountBalanceLogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.accountBalanceLog();
    t.crud.accountBalanceLogs({ filtering: true, ordering: true , pagination: true });

    t.field('accountBalanceLogsCount', {
      type: 'Int',
      args: {
        where: 'AccountBalanceLogWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.accountBalanceLog.count(args);
      },
    });
  },
});

export const accountBalanceLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAccountBalanceLog();
    t.crud.updateOneAccountBalanceLog();
    t.crud.upsertOneAccountBalanceLog();
    t.crud.deleteOneAccountBalanceLog();

    t.crud.updateManyAccountBalanceLog();
    t.crud.deleteManyAccountBalanceLog();
  },
});
