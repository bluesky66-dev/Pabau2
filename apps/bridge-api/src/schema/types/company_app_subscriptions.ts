import { objectType, extendType } from 'nexus';

export const company_app_subscriptions = objectType({
  name: 'company_app_subscriptions',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.app_key_value();
    t.model.gc_app_plan_id();
    t.model.app_fee();
  },
});

export const company_app_subscriptionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_app_subscriptions();
    t.crud.company_app_subscriptions({ filtering: true, ordering: true });
  },
});

export const company_app_subscriptionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_app_subscriptions();
    t.crud.updateOnecompany_app_subscriptions();
    t.crud.upsertOnecompany_app_subscriptions();
    t.crud.deleteOnecompany_app_subscriptions();

    t.crud.updateManycompany_app_subscriptions();
    t.crud.deleteManycompany_app_subscriptions();
  },
});
