import { objectType, extendType } from 'nexus';

export const account_balance_log = objectType({
  name: 'account_balance_log',
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

export const account_balance_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.account_balance_log();
    t.crud.account_balance_logs({ filtering: true, ordering: true });
  },
});

export const account_balance_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneaccount_balance_log();
    t.crud.updateOneaccount_balance_log();
    t.crud.upsertOneaccount_balance_log();
    t.crud.deleteOneaccount_balance_log();

    t.crud.updateManyaccount_balance_log();
    t.crud.deleteManyaccount_balance_log();
  },
});
