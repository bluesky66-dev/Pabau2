import { objectType, extendType } from 'nexus';

export const user_products = objectType({
  name: 'user_products',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.product_id();
    t.model.discount_tier();
  },
});

export const user_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_products();
    t.crud.user_products({ filtering: true, ordering: true });
  },
});

export const user_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_products();
    t.crud.updateOneuser_products();
    t.crud.upsertOneuser_products();
    t.crud.deleteOneuser_products();

    t.crud.updateManyuser_products();
    t.crud.deleteManyuser_products();
  },
});
