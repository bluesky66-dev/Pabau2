import { objectType, extendType } from 'nexus';

export const salon_bookings_external = objectType({
  name: 'salon_bookings_external',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.location();
  },
});

export const salon_bookings_externalQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_external();
    t.crud.salon_bookings_externals({ filtering: true, ordering: true });
  },
});

export const salon_bookings_externalMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_external();
    t.crud.updateOnesalon_bookings_external();
    t.crud.upsertOnesalon_bookings_external();
    t.crud.deleteOnesalon_bookings_external();

    t.crud.updateManysalon_bookings_external();
    t.crud.deleteManysalon_bookings_external();
  },
});
