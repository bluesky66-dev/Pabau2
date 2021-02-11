import { objectType, extendType } from 'nexus';

export const zimport_bookings_title = objectType({
  name: 'zimport_bookings_title',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_booking_id();
    t.model.title();
  },
});

export const zimport_bookings_titleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_bookings_title();
    t.crud.zimport_bookings_titles({ filtering: true, ordering: true });
  },
});

export const zimport_bookings_titleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_bookings_title();
    t.crud.updateOnezimport_bookings_title();
    t.crud.upsertOnezimport_bookings_title();
    t.crud.deleteOnezimport_bookings_title();

    t.crud.updateManyzimport_bookings_title();
    t.crud.deleteManyzimport_bookings_title();
  },
});
