import { objectType, extendType } from 'nexus';

export const gocardless_payments = objectType({
  name: 'gocardless_payments',
  definition(t) {
    t.model.id();
    t.model.inv_id();
    t.model.company_id();
    t.model.payment_id();
    t.model.created_date();
  },
});

export const gocardless_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_payments();
    t.crud.gocardless_payments({ filtering: true, ordering: true });
  },
});

export const gocardless_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_payments();
    t.crud.updateOnegocardless_payments();
    t.crud.upsertOnegocardless_payments();
    t.crud.deleteOnegocardless_payments();

    t.crud.updateManygocardless_payments();
    t.crud.deleteManygocardless_payments();
  },
});
