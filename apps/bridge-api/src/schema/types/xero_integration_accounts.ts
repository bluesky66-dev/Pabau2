import { objectType, extendType } from 'nexus';

export const xero_integration_accounts = objectType({
  name: 'xero_integration_accounts',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.payment_method();
    t.model.payment_account_code();
  },
});

export const xero_integration_accountsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_integration_accounts();
    t.crud.xero_integration_accounts({ filtering: true, ordering: true });
  },
});

export const xero_integration_accountsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_integration_accounts();
    t.crud.updateOnexero_integration_accounts();
    t.crud.upsertOnexero_integration_accounts();
    t.crud.deleteOnexero_integration_accounts();

    t.crud.updateManyxero_integration_accounts();
    t.crud.deleteManyxero_integration_accounts();
  },
});
