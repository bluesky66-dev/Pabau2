import { objectType, extendType } from 'nexus';

export const inv_warehouses_products = objectType({
  name: 'inv_warehouses_products',
  definition(t) {
    t.model.id();
    t.model.product_id();
    t.model.warehouse_id();
    t.model.location_id();
    t.model.quantity();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.expiry_date();
    t.model.batch_code();
    t.model.description();
  },
});

export const inv_warehouses_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_warehouses_products();
    t.crud.inv_warehouses_products({ filtering: true, ordering: true });
  },
});

export const inv_warehouses_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_warehouses_products();
    t.crud.updateOneinv_warehouses_products();
    t.crud.upsertOneinv_warehouses_products();
    t.crud.deleteOneinv_warehouses_products();

    t.crud.updateManyinv_warehouses_products();
    t.crud.deleteManyinv_warehouses_products();
  },
});
