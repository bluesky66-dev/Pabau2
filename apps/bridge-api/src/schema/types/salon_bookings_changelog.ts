import { objectType, extendType } from 'nexus';

export const salon_bookings_changelog = objectType({
  name: 'salon_bookings_changelog',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.changelog();
  },
});

export const salon_bookings_changelogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_changelog();
    t.crud.salon_bookings_changelogs({ filtering: true, ordering: true });
  },
});

export const salon_bookings_changelogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_changelog();
    t.crud.updateOnesalon_bookings_changelog();
    t.crud.upsertOnesalon_bookings_changelog();
    t.crud.deleteOnesalon_bookings_changelog();

    t.crud.updateManysalon_bookings_changelog();
    t.crud.deleteManysalon_bookings_changelog();
  },
});
