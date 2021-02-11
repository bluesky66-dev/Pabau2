import { objectType, extendType } from 'nexus';

export const xero_settings = objectType({
  name: 'xero_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.disabled();
    t.model.consumer_key();
    t.model.shared_secret();
    t.model.rsa_private_key();
    t.model.rsa_public_key();
    t.model.status_invoice();
    t.model.invoice_account_code();
    t.model.payment_account_code();
    t.model.employee_tracking_category();
    t.model.location_tracking_category();
    t.model.employee_tracking_category_name();
    t.model.location_tracking_category_name();
  },
});

export const xero_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_settings();
    t.crud.xero_settings({ filtering: true, ordering: true });
  },
});

export const xero_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_settings();
    t.crud.updateOnexero_settings();
    t.crud.upsertOnexero_settings();
    t.crud.deleteOnexero_settings();

    t.crud.updateManyxero_settings();
    t.crud.deleteManyxero_settings();
  },
});
