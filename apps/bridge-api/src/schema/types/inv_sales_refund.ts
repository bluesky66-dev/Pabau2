import { objectType, extendType } from 'nexus';

export const inv_sales_refund = objectType({
  name: 'inv_sales_refund',
  definition(t) {
    t.model.id();
    t.model.reference_no();
    t.model.warehouse_id();
    t.model.biller_id();
    t.model.biller_name();
    t.model.customer_id();
    t.model.customer_name();
    t.model.date();
    t.model.note();
    t.model.refund_note();
    t.model.inv_total();
    t.model.total_tax();
    t.model.total();
    t.model.paid_amount();
    t.model.store_discount();
    t.model.discount_amount();
    t.model.account_amount();
    t.model.loyalty_card_num();
    t.model.loyalty_card_amount();
    t.model.voucher_no();
    t.model.voucher_amount();
    t.model.invoice_type();
    t.model.in_type();
    t.model.total_tax2();
    t.model.tax_rate2_id();
    t.model.shipping_rate();
    t.model.shipping_rate_id();
    t.model.delivery();
    t.model.delivery_date();
    t.model.tip();
    t.model.by_email();
    t.model.by_sms();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.paid_by();
    t.model.refund_by();
    t.model.booking_id();
  },
});

export const inv_sales_refundQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_refund();
    t.crud.inv_sales_refunds({ filtering: true, ordering: true });
  },
});

export const inv_sales_refundMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_refund();
    t.crud.updateOneinv_sales_refund();
    t.crud.upsertOneinv_sales_refund();
    t.crud.deleteOneinv_sales_refund();

    t.crud.updateManyinv_sales_refund();
    t.crud.deleteManyinv_sales_refund();
  },
});
