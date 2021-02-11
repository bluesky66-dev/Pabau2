import { objectType, extendType } from 'nexus';

export const partner_payments = objectType({
  name: 'partner_payments',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.charge_date();
    t.model.amount();
    t.model.description();
    t.model.partner_id();
    t.model.status();
  },
});

export const partner_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.partner_payments();
    t.crud.partner_payments({ filtering: true, ordering: true });
  },
});

export const partner_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepartner_payments();
    t.crud.updateOnepartner_payments();
    t.crud.upsertOnepartner_payments();
    t.crud.deleteOnepartner_payments();

    t.crud.updateManypartner_payments();
    t.crud.deleteManypartner_payments();
  },
});
