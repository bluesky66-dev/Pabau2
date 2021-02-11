import { objectType, extendType } from 'nexus';

export const payment_protection_stripe = objectType({
  name: 'payment_protection_stripe',
  definition(t) {
    t.model.id();
    t.model.stripe_customer_id();
    t.model.payment_method_id();
    t.model.contact_id();
    t.model.created_at();
    t.model.modified_at();
    t.model.company_id();
  },
});

export const payment_protection_stripeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.payment_protection_stripe();
    t.crud.payment_protection_stripes({ filtering: true, ordering: true });
  },
});

export const payment_protection_stripeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepayment_protection_stripe();
    t.crud.updateOnepayment_protection_stripe();
    t.crud.upsertOnepayment_protection_stripe();
    t.crud.deleteOnepayment_protection_stripe();

    t.crud.updateManypayment_protection_stripe();
    t.crud.deleteManypayment_protection_stripe();
  },
});
