import { objectType, extendType } from 'nexus';

export const inv_ins_payments = objectType({
  name: 'inv_ins_payments',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.insurer_id();
    t.model.payment_id();
    t.model.amount();
    t.model.created_by();
    t.model.created_on();
    t.model.payment_type();
    t.model.paid_amount();
    t.model.remaining();
    t.model.ref_number();
  },
});

export const inv_ins_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_ins_payments();
    t.crud.inv_ins_payments({ filtering: true, ordering: true });
  },
});

export const inv_ins_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_ins_payments();
    t.crud.updateOneinv_ins_payments();
    t.crud.upsertOneinv_ins_payments();
    t.crud.deleteOneinv_ins_payments();

    t.crud.updateManyinv_ins_payments();
    t.crud.deleteManyinv_ins_payments();
  },
});
