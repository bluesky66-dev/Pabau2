import { objectType, extendType } from 'nexus';

export const service_product_loyalty = objectType({
  name: 'service_product_loyalty',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.product_id();
    t.model.points();
  },
});

export const service_product_loyaltyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.service_product_loyalty();
    t.crud.service_product_loyalties({ filtering: true, ordering: true });
  },
});

export const service_product_loyaltyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneservice_product_loyalty();
    t.crud.updateOneservice_product_loyalty();
    t.crud.upsertOneservice_product_loyalty();
    t.crud.deleteOneservice_product_loyalty();

    t.crud.updateManyservice_product_loyalty();
    t.crud.deleteManyservice_product_loyalty();
  },
});
