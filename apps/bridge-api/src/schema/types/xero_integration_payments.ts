import { objectType, extendType } from 'nexus';

export const xero_integration_payments = objectType({
  name: 'xero_integration_payments',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.xero_payment_id();
    t.model.xero_invoice_id();
    t.model.status();
    t.model.created_at();
    t.model.modified_at();
  },
});

export const xero_integration_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_integration_payments();
    t.crud.xero_integration_payments({ filtering: true, ordering: true });
  },
});

export const xero_integration_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_integration_payments();
    t.crud.updateOnexero_integration_payments();
    t.crud.upsertOnexero_integration_payments();
    t.crud.deleteOnexero_integration_payments();

    t.crud.updateManyxero_integration_payments();
    t.crud.deleteManyxero_integration_payments();
  },
});
