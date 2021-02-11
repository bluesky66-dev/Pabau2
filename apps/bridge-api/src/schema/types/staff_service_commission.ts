import { objectType, extendType } from 'nexus';

export const staff_service_commission = objectType({
  name: 'staff_service_commission',
  definition(t) {
    t.model.id();
    t.model.sales_id();
    t.model.booking_id();
    t.model.staff_id();
    t.model.commission();
    t.model.creation_date();
    t.model.service_id();
    t.model.quote_id();
  },
});

export const staff_service_commissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_service_commission();
    t.crud.staff_service_commissions({ filtering: true, ordering: true });
  },
});

export const staff_service_commissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_service_commission();
    t.crud.updateOnestaff_service_commission();
    t.crud.upsertOnestaff_service_commission();
    t.crud.deleteOnestaff_service_commission();

    t.crud.updateManystaff_service_commission();
    t.crud.deleteManystaff_service_commission();
  },
});
