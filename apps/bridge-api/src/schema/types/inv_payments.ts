import { objectType, extendType } from 'nexus';

export const inv_payments = objectType({
  name: 'inv_payments',
  definition(t) {
    t.model.id();
    t.model.from();
    t.model.date();
    t.model.amount();
    t.model.invoice();
    t.model.pmethod();
    t.model.account_balance();
    t.model.contact_id();
    t.model.occupier();
    t.model.order_id();
    t.model.uid();
    t.model.card_type();
    t.model.charge_amount();
    t.model.card_digits();
    t.model.datetime();
    t.model.note();
    t.model.new_way2();
    t.model.new_way3();
    t.model.ref_num();
    t.model.custom_pmethod();
    t.model.xero_payment_id();
    t.model.is_insurance();
    t.model.payment_id();
    t.model.custom_id();
    t.model.imported();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.custom_invoice_id();
    t.model.insurer_id();
    t.model.is_credit_note();
  },
});

export const inv_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_payments();
    t.crud.inv_payments({ filtering: true, ordering: true });
  },
});

export const inv_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_payments();
    t.crud.updateOneinv_payments();
    t.crud.upsertOneinv_payments();
    t.crud.deleteOneinv_payments();

    t.crud.updateManyinv_payments();
    t.crud.deleteManyinv_payments();
  },
});
