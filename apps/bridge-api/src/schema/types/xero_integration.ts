import { objectType, extendType } from 'nexus';

export const xero_integration = objectType({
  name: 'xero_integration',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.client_id();
    t.model.tenant_id();
    t.model.client_secret();
    t.model.refresh_token();
    t.model.redirect_uri();
    t.model.default_tax_method();
    t.model.payments_account_code();
    t.model.items_account_code();
    t.model.payments_enabled();
    t.model.tracking_categories_enabled();
    t.model.default_invoice_status();
    t.model.enabled();
    t.model.created_at();
    t.model.modified_at();
  },
});

export const xero_integrationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_integration();
    t.crud.xero_integrations({ filtering: true, ordering: true });
  },
});

export const xero_integrationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_integration();
    t.crud.updateOnexero_integration();
    t.crud.upsertOnexero_integration();
    t.crud.deleteOnexero_integration();

    t.crud.updateManyxero_integration();
    t.crud.deleteManyxero_integration();
  },
});
