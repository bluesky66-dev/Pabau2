import { objectType, extendType } from 'nexus';

export const xero_settings_payment_types = objectType({
  name: 'xero_settings_payment_types',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.payment_method();
    t.model.payment_account_code();
    t.model.disabled();
  },
});

export const xero_settings_payment_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_settings_payment_types();
    t.crud.xero_settings_payment_types({ filtering: true, ordering: true });
  },
});

export const xero_settings_payment_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_settings_payment_types();
    t.crud.updateOnexero_settings_payment_types();
    t.crud.upsertOnexero_settings_payment_types();
    t.crud.deleteOnexero_settings_payment_types();

    t.crud.updateManyxero_settings_payment_types();
    t.crud.deleteManyxero_settings_payment_types();
  },
});
