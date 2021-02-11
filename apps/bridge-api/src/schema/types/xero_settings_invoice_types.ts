import { objectType, extendType } from 'nexus';

export const xero_settings_invoice_types = objectType({
  name: 'xero_settings_invoice_types',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.invoice_type();
    t.model.invoice_account_code();
    t.model.disabled();
  },
});

export const xero_settings_invoice_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_settings_invoice_types();
    t.crud.xero_settings_invoice_types({ filtering: true, ordering: true });
  },
});

export const xero_settings_invoice_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_settings_invoice_types();
    t.crud.updateOnexero_settings_invoice_types();
    t.crud.upsertOnexero_settings_invoice_types();
    t.crud.deleteOnexero_settings_invoice_types();

    t.crud.updateManyxero_settings_invoice_types();
    t.crud.deleteManyxero_settings_invoice_types();
  },
});
