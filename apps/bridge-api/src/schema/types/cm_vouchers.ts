import { objectType, extendType } from 'nexus';

export const cm_vouchers = objectType({
  name: 'cm_vouchers',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.type();
    t.model.description();
    t.model.amount();
    t.model.valid();
    t.model.date_from();
    t.model.date_to();
    t.model.time_from();
    t.model.time_to();
    t.model.expiry_date();
    t.model.every();
    t.model.occupier();
    t.model.purchased_for();
    t.model.purchased_by();
    t.model.status();
    t.model.remaining_balance();
    t.model.lead_id();
    t.model.voucher_contact_email();
    t.model.voucher_contact_mobile();
    t.model.purchase_date();
    t.model.purchaser_contact_id();
    t.model.purchased_for_id();
    t.model.imported();
    t.model.voucher_type();
    t.model.sales_id();
    t.model.sms_campaign_id();
    t.model.template_id();
  },
});

export const cm_vouchersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_vouchers();
    t.crud.cm_vouchers({ filtering: true, ordering: true });
  },
});

export const cm_vouchersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_vouchers();
    t.crud.updateOnecm_vouchers();
    t.crud.upsertOnecm_vouchers();
    t.crud.deleteOnecm_vouchers();

    t.crud.updateManycm_vouchers();
    t.crud.deleteManycm_vouchers();
  },
});
