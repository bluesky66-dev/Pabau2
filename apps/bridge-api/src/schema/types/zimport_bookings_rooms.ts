import { objectType, extendType } from 'nexus';

export const zimport_bookings_rooms = objectType({
  name: 'zimport_bookings_rooms',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_booking_id();
    t.model.custom_room_id();
    t.model.custom_room_name();
  },
});

export const zimport_bookings_roomsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_bookings_rooms();
    t.crud.zimport_bookings_rooms({ filtering: true, ordering: true });
  },
});

export const zimport_bookings_roomsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_bookings_rooms();
    t.crud.updateOnezimport_bookings_rooms();
    t.crud.upsertOnezimport_bookings_rooms();
    t.crud.deleteOnezimport_bookings_rooms();

    t.crud.updateManyzimport_bookings_rooms();
    t.crud.deleteManyzimport_bookings_rooms();
  },
});
