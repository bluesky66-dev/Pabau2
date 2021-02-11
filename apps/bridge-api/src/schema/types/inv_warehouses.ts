import { objectType, extendType } from 'nexus';

export const inv_warehouses = objectType({
  name: 'inv_warehouses',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.address();
    t.model.city();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_warehousesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_warehouses();
    t.crud.inv_warehouses({ filtering: true, ordering: true });
  },
});

export const inv_warehousesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_warehouses();
    t.crud.updateOneinv_warehouses();
    t.crud.upsertOneinv_warehouses();
    t.crud.deleteOneinv_warehouses();

    t.crud.updateManyinv_warehouses();
    t.crud.deleteManyinv_warehouses();
  },
});
