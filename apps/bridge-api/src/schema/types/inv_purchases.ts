import { objectType, extendType } from 'nexus';

export const inv_purchases = objectType({
  name: 'inv_purchases',
  definition(t) {
    t.model.id();
    t.model.reference_no();
    t.model.warehouse_id();
    t.model.supplier_id();
    t.model.supplier_name();
    t.model.date();
    t.model.note();
    t.model.total();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_purchasesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_purchases();
    t.crud.inv_purchases({ filtering: true, ordering: true });
  },
});

export const inv_purchasesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_purchases();
    t.crud.updateOneinv_purchases();
    t.crud.upsertOneinv_purchases();
    t.crud.deleteOneinv_purchases();

    t.crud.updateManyinv_purchases();
    t.crud.deleteManyinv_purchases();
  },
});
