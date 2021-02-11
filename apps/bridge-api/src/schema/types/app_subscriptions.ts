import { objectType, extendType } from 'nexus';

export const app_subscriptions = objectType({
  name: 'app_subscriptions',
  definition(t) {
    t.model.id();
    t.model.key_value();
    t.model.name();
    t.model.Description();
    t.model.price();
  },
});

export const app_subscriptionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.app_subscriptions();
    t.crud.app_subscriptions({ filtering: true, ordering: true });
  },
});

export const app_subscriptionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapp_subscriptions();
    t.crud.updateOneapp_subscriptions();
    t.crud.upsertOneapp_subscriptions();
    t.crud.deleteOneapp_subscriptions();

    t.crud.updateManyapp_subscriptions();
    t.crud.deleteManyapp_subscriptions();
  },
});
