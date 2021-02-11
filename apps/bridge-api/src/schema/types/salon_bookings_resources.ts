import { objectType, extendType } from 'nexus';

export const salon_bookings_resources = objectType({
  name: 'salon_bookings_resources',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.booking_id();
    t.model.resource_id();
  },
});

export const salon_bookings_resourcesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_resources();
    t.crud.salon_bookings_resources({ filtering: true, ordering: true });
  },
});

export const salon_bookings_resourcesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_resources();
    t.crud.updateOnesalon_bookings_resources();
    t.crud.upsertOnesalon_bookings_resources();
    t.crud.deleteOnesalon_bookings_resources();

    t.crud.updateManysalon_bookings_resources();
    t.crud.deleteManysalon_bookings_resources();
  },
});
