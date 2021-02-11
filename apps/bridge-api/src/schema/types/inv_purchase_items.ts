import { objectType, extendType } from 'nexus';

export const inv_purchase_items = objectType({
  name: 'inv_purchase_items',
  definition(t) {
    t.model.id();
    t.model.purchase_id();
    t.model.product_id();
    t.model.product_code();
    t.model.product_name();
    t.model.quantity();
    t.model.unit_price();
    t.model.tax_amount();
    t.model.gross_total();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_purchase_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_purchase_items();
    t.crud.inv_purchase_items({ filtering: true, ordering: true });
  },
});

export const inv_purchase_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_purchase_items();
    t.crud.updateOneinv_purchase_items();
    t.crud.upsertOneinv_purchase_items();
    t.crud.deleteOneinv_purchase_items();

    t.crud.updateManyinv_purchase_items();
    t.crud.deleteManyinv_purchase_items();
  },
});
