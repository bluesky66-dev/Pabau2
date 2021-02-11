import { objectType, extendType } from 'nexus';

export const inv_sale_refund_items = objectType({
  name: 'inv_sale_refund_items',
  definition(t) {
    t.model.id();
    t.model.sale_id();
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
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_sale_refund_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sale_refund_items();
    t.crud.inv_sale_refund_items({ filtering: true, ordering: true });
  },
});

export const inv_sale_refund_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sale_refund_items();
    t.crud.updateOneinv_sale_refund_items();
    t.crud.upsertOneinv_sale_refund_items();
    t.crud.deleteOneinv_sale_refund_items();

    t.crud.updateManyinv_sale_refund_items();
    t.crud.deleteManyinv_sale_refund_items();
  },
});
