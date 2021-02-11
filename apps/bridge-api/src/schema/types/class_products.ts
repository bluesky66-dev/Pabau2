import { objectType, extendType } from 'nexus';

export const class_products = objectType({
  name: 'class_products',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.unit();
    t.model.size();
    t.model.product_order();
    t.model.um();
    t.model.cost();
    t.model.price();
    t.model.alert_quantity();
    t.model.image();
    t.model.category_id();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.product_desc();
  },
});

export const class_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_products();
    t.crud.class_products({ filtering: true, ordering: true });
  },
});

export const class_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_products();
    t.crud.updateOneclass_products();
    t.crud.upsertOneclass_products();
    t.crud.deleteOneclass_products();

    t.crud.updateManyclass_products();
    t.crud.deleteManyclass_products();
  },
});
