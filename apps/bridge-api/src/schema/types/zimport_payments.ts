import { objectType, extendType } from 'nexus';

export const zimport_payments = objectType({
  name: 'zimport_payments',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.amount();
    t.model.pmethod();
    t.model.occupier();
    t.model.imported();
    t.model.invoice_id();
  },
});

export const zimport_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_payments();
    t.crud.zimport_payments({ filtering: true, ordering: true });
  },
});

export const zimport_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_payments();
    t.crud.updateOnezimport_payments();
    t.crud.upsertOnezimport_payments();
    t.crud.deleteOnezimport_payments();

    t.crud.updateManyzimport_payments();
    t.crud.deleteManyzimport_payments();
  },
});
