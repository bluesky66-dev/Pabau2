import { objectType, extendType } from 'nexus';

export const product_details = objectType({
  name: 'product_details',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.code();
    t.model.other_name_1();
    t.model.other_name();
    t.model.image();
  },
});

export const product_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.product_details();
    t.crud.product_details({ filtering: true, ordering: true });
  },
});

export const product_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneproduct_details();
    t.crud.updateOneproduct_details();
    t.crud.upsertOneproduct_details();
    t.crud.deleteOneproduct_details();

    t.crud.updateManyproduct_details();
    t.crud.deleteManyproduct_details();
  },
});
