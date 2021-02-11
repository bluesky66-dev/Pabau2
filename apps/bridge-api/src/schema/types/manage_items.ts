import { objectType, extendType } from 'nexus';

export const manage_items = objectType({
  name: 'manage_items',
  definition(t) {
    t.model.id();
    t.model.suspend_id();
    t.model.product_id();
    t.model.product_code();
    t.model.product_name();
    t.model.product_unit();
    t.model.tax_rate_id();
    t.model.tax();
    t.model.quantity();
    t.model.unit_price();
    t.model.gross_total();
    t.model.val_tax();
    t.model.staff_purchase();
  },
});

export const manage_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_items();
    t.crud.manage_items({ filtering: true, ordering: true });
  },
});

export const manage_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_items();
    t.crud.updateOnemanage_items();
    t.crud.upsertOnemanage_items();
    t.crud.deleteOnemanage_items();

    t.crud.updateManymanage_items();
    t.crud.deleteManymanage_items();
  },
});
