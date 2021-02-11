import { objectType, extendType } from 'nexus';

export const inv_payments_unallocated = objectType({
  name: 'inv_payments_unallocated',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.contact_id();
    t.model.amount();
    t.model.pmethod();
    t.model.date();
    t.model.insurer_id();
    t.model.custom_id();
    t.model.custom_contact_id();
    t.model.custom_insurer_id();
    t.model.custom_contact_name();
    t.model.date_time();
    t.model.reference();
    t.model.charge_amount();
    t.model.imported();
  },
});

export const inv_payments_unallocatedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_payments_unallocated();
    t.crud.inv_payments_unallocateds({ filtering: true, ordering: true });
  },
});

export const inv_payments_unallocatedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_payments_unallocated();
    t.crud.updateOneinv_payments_unallocated();
    t.crud.upsertOneinv_payments_unallocated();
    t.crud.deleteOneinv_payments_unallocated();

    t.crud.updateManyinv_payments_unallocated();
    t.crud.deleteManyinv_payments_unallocated();
  },
});
