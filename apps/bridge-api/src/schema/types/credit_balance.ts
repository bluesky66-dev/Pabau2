import { objectType, extendType } from 'nexus';

export const credit_balance = objectType({
  name: 'credit_balance',
  definition(t) {
    t.model.credit_balance_id();
    t.model.company();
    t.model.balance();
    t.model.balance_currency();
    t.model.auto();
  },
});

export const credit_balanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.credit_balance();
    t.crud.credit_balances({ filtering: true, ordering: true });
  },
});

export const credit_balanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecredit_balance();
    t.crud.updateOnecredit_balance();
    t.crud.upsertOnecredit_balance();
    t.crud.deleteOnecredit_balance();

    t.crud.updateManycredit_balance();
    t.crud.deleteManycredit_balance();
  },
});
