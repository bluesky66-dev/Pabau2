import { objectType, extendType } from 'nexus';

export const ip_bookings = objectType({
  name: 'ip_bookings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.code();
    t.model.patient_id();
    t.model.eoc_id();
    t.model.created_at();
    t.model.duration();
    t.model.until();
    t.model.admitted_at();
    t.model.discharced_at();
    t.model.location_id();
    t.model.note();
    t.model.status();
    t.model.observation_frq();
    t.model.contract_id();
  },
});

export const ip_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_bookings();
    t.crud.ip_bookings({ filtering: true, ordering: true });
  },
});

export const ip_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_bookings();
    t.crud.updateOneip_bookings();
    t.crud.upsertOneip_bookings();
    t.crud.deleteOneip_bookings();

    t.crud.updateManyip_bookings();
    t.crud.deleteManyip_bookings();
  },
});
