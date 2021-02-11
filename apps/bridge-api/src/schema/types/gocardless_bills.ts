import { objectType, extendType } from 'nexus';

export const gocardless_bills = objectType({
  name: 'gocardless_bills',
  definition(t) {
    t.model.primary_id();
    t.model.id();
    t.model.amount();
    t.model.gocardless_fees();
    t.model.partner_fees();
    t.model.currency();
    t.model.created_at();
    t.model.description();
    t.model.other_id();
    t.model.name();
    t.model.paid_at();
    t.model.status();
    t.model.merchant_id();
    t.model.user_id();
    t.model.source_type();
    t.model.source_id();
    t.model.uri();
    t.model.can_be_retried();
    t.model.payout_id();
    t.model.is_setup_fee();
    t.model.charge_customer_at();
  },
});

export const gocardless_billsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_bills();
    t.crud.gocardless_bills({ filtering: true, ordering: true });
  },
});

export const gocardless_billsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_bills();
    t.crud.updateOnegocardless_bills();
    t.crud.upsertOnegocardless_bills();
    t.crud.deleteOnegocardless_bills();

    t.crud.updateManygocardless_bills();
    t.crud.deleteManygocardless_bills();
  },
});
