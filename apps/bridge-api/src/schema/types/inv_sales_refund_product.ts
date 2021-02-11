import { objectType, extendType } from 'nexus';

export const inv_sales_refund_product = objectType({
  name: 'inv_sales_refund_product',
  definition(t) {
    t.model.id();
    t.model.sales_refund_item_id();
    t.model.refund_amount();
    t.model.qty();
    t.model.note();
    t.model.payment_mode();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_sales_refund_productQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_refund_product();
    t.crud.inv_sales_refund_products({ filtering: true, ordering: true });
  },
});

export const inv_sales_refund_productMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_refund_product();
    t.crud.updateOneinv_sales_refund_product();
    t.crud.upsertOneinv_sales_refund_product();
    t.crud.deleteOneinv_sales_refund_product();

    t.crud.updateManyinv_sales_refund_product();
    t.crud.deleteManyinv_sales_refund_product();
  },
});
