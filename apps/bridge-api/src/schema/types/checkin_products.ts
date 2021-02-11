import { objectType, extendType } from 'nexus';

export const checkin_products = objectType({
  name: 'checkin_products',
  definition(t) {
    t.model.id();
    t.model.queue_id();
    t.model.product_id();
    t.model.date_start();
    t.model.date_end();
    t.model.inv_product_id();
  },
});

export const checkin_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkin_products();
    t.crud.checkin_products({ filtering: true, ordering: true });
  },
});

export const checkin_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecheckin_products();
    t.crud.updateOnecheckin_products();
    t.crud.upsertOnecheckin_products();
    t.crud.deleteOnecheckin_products();

    t.crud.updateManycheckin_products();
    t.crud.deleteManycheckin_products();
  },
});
