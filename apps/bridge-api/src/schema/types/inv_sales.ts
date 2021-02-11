import { objectType, extendType } from 'nexus';

export const inv_sales = objectType({
  name: 'inv_sales',
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
    t.model.by_email();
    t.model.by_sms();
    t.model.tip();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.paid_by();
    t.model.booking_id();
    t.model.quaser_booking_id();
    t.model.invoice_bit();
    t.model.custom_id();
    t.model.contact_custom_id();
    t.model.Practitioner_id();
    t.model.User_id();
    t.model.Treatment_id();
    t.model.imported();
    t.model.VAT_drop();
    t.model.order_id();
    t.model.void();
    t.model.guid();
    t.model.old_paid_by();
    t.model.loyalty_points();
    t.model.xero_invoice_id();
    t.model.xero_updated_date();
    t.model.split_count();
    t.model.split_guid();
    t.model.insurer_contract_id();
    t.model.lock_sale();
    t.model.location_id();
    t.model.contract_id();
    t.model.is_ok();
    t.model.refund_to();
    t.model.credit_ref_id();
    t.model.credit_amount();
    t.model.credit_type();
    t.model.issuer_id();
  },
});

export const inv_salesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales();
    t.crud.inv_sales({ filtering: true, ordering: true });
  },
});

export const inv_salesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales();
    t.crud.updateOneinv_sales();
    t.crud.upsertOneinv_sales();
    t.crud.deleteOneinv_sales();

    t.crud.updateManyinv_sales();
    t.crud.deleteManyinv_sales();
  },
});
