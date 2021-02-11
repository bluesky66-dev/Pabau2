import { objectType, extendType } from 'nexus';

export const gocardless_subscriptions = objectType({
  name: 'gocardless_subscriptions',
  definition(t) {
    t.model.id();
    t.model.subscription_url();
    t.model.bills_url();
    t.model.contact_id();
    t.model.plan_id();
    t.model.amount();
    t.model.interval_length();
    t.model.interval_unit();
    t.model.interval_count();
    t.model.name();
    t.model.description();
    t.model.setup_fee();
    t.model.created_at();
    t.model.currency();
    t.model.expires_at();
    t.model.merchant_id();
    t.model.next_interval_start();
    t.model.start_at();
    t.model.initiated_at();
    t.model.status();
    t.model.go_user_id();
    t.model.go_subscription_id();
  },
});

export const gocardless_subscriptionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_subscriptions();
    t.crud.gocardless_subscriptions({ filtering: true, ordering: true });
  },
});

export const gocardless_subscriptionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_subscriptions();
    t.crud.updateOnegocardless_subscriptions();
    t.crud.upsertOnegocardless_subscriptions();
    t.crud.deleteOnegocardless_subscriptions();

    t.crud.updateManygocardless_subscriptions();
    t.crud.deleteManygocardless_subscriptions();
  },
});
