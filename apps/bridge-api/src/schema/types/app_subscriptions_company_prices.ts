import { objectType, extendType } from 'nexus';

export const app_subscriptions_company_prices = objectType({
  name: 'app_subscriptions_company_prices',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.app_key_value();
    t.model.price();
  },
});

export const app_subscriptions_company_pricesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.app_subscriptions_company_prices();
    t.crud.app_subscriptions_company_prices({ filtering: true, ordering: true });
  },
});

export const app_subscriptions_company_pricesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapp_subscriptions_company_prices();
    t.crud.updateOneapp_subscriptions_company_prices();
    t.crud.upsertOneapp_subscriptions_company_prices();
    t.crud.deleteOneapp_subscriptions_company_prices();

    t.crud.updateManyapp_subscriptions_company_prices();
    t.crud.deleteManyapp_subscriptions_company_prices();
  },
});
