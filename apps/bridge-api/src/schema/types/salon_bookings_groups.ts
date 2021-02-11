import { objectType, extendType } from 'nexus';

export const salon_bookings_groups = objectType({
  name: 'salon_bookings_groups',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.occupier();
    t.model.max_clients();
    t.model.created_date();
    t.model.models_count();
    t.model.models_req_count();
    t.model.imported();
    t.model.delegates();
  },
});

export const salon_bookings_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_groups();
    t.crud.salon_bookings_groups({ filtering: true, ordering: true });
  },
});

export const salon_bookings_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_groups();
    t.crud.updateOnesalon_bookings_groups();
    t.crud.upsertOnesalon_bookings_groups();
    t.crud.deleteOnesalon_bookings_groups();

    t.crud.updateManysalon_bookings_groups();
    t.crud.deleteManysalon_bookings_groups();
  },
});
