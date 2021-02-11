import { objectType, extendType } from 'nexus';

export const ip_procedure_booked = objectType({
  name: 'ip_procedure_booked',
  definition(t) {
    t.model.id();
    t.model.procedure_id();
    t.model.salon_booking_id();
    t.model.ip_booking_id();
    t.model.site();
    t.model.laterality();
    t.model.level();
    t.model.note();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.occupier();
  },
});

export const ip_procedure_bookedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_procedure_booked();
    t.crud.ip_procedure_bookeds({ filtering: true, ordering: true });
  },
});

export const ip_procedure_bookedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_procedure_booked();
    t.crud.updateOneip_procedure_booked();
    t.crud.upsertOneip_procedure_booked();
    t.crud.deleteOneip_procedure_booked();

    t.crud.updateManyip_procedure_booked();
    t.crud.deleteManyip_procedure_booked();
  },
});
