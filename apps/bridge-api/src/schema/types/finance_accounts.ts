import { objectType, extendType } from 'nexus';

export const finance_accounts = objectType({
  name: 'finance_accounts',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.account_name();
    t.model.creation_date();
  },
});

export const finance_accountsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.finance_accounts();
    t.crud.finance_accounts({ filtering: true, ordering: true });
  },
});

export const finance_accountsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefinance_accounts();
    t.crud.updateOnefinance_accounts();
    t.crud.upsertOnefinance_accounts();
    t.crud.deleteOnefinance_accounts();

    t.crud.updateManyfinance_accounts();
    t.crud.deleteManyfinance_accounts();
  },
});
