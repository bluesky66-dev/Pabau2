import { objectType, extendType } from 'nexus';

export const stripe_transactions = objectType({
  name: 'stripe_transactions',
  definition(t) {
    t.model.id();
    t.model.amount();
    t.model.currency();
    t.model.company_id();
    t.model.contact_id();
    t.model.booking_id();
    t.model.invoice_id();
    t.model.location();
    t.model.date();
    t.model.status();
    t.model.amount_after_fee();
    t.model.charge_id();
    t.model.payment_intent_id();
    t.model.error_code();
    t.model.reciever();
  },
});

export const stripe_transactionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.stripe_transactions();
    t.crud.stripe_transactions({ filtering: true, ordering: true });
  },
});

export const stripe_transactionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestripe_transactions();
    t.crud.updateOnestripe_transactions();
    t.crud.upsertOnestripe_transactions();
    t.crud.deleteOnestripe_transactions();

    t.crud.updateManystripe_transactions();
    t.crud.deleteManystripe_transactions();
  },
});
