import { objectType, extendType } from 'nexus';

export const converted_balances = objectType({
  name: 'converted_balances',
  definition(t) {
    t.model.id();
    t.model.time();
    t.model.sale_id();
    t.model.company_id();
  },
});

export const converted_balancesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.converted_balances();
    t.crud.converted_balances({ filtering: true, ordering: true });
  },
});

export const converted_balancesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconverted_balances();
    t.crud.updateOneconverted_balances();
    t.crud.upsertOneconverted_balances();
    t.crud.deleteOneconverted_balances();

    t.crud.updateManyconverted_balances();
    t.crud.deleteManyconverted_balances();
  },
});
