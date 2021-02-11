import { objectType, extendType } from 'nexus';

export const account_balance = objectType({
  name: 'account_balance',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.insurance_company_id();
    t.model.balance();
    t.model.imported();
  },
});

export const account_balanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.account_balance();
    t.crud.account_balances({ filtering: true, ordering: true });
  },
});

export const account_balanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneaccount_balance();
    t.crud.updateOneaccount_balance();
    t.crud.upsertOneaccount_balance();
    t.crud.deleteOneaccount_balance();

    t.crud.updateManyaccount_balance();
    t.crud.deleteManyaccount_balance();
  },
});
