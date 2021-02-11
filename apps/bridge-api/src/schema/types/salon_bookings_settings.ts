import { objectType, extendType } from 'nexus';

export const salon_bookings_settings = objectType({
  name: 'salon_bookings_settings',
  definition(t) {
    t.model.id();
    t.model.userid();
    t.model.name();
    t.model.value();
    t.model.createdate();
    t.model.updatedate();
  },
});

export const salon_bookings_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_settings();
    t.crud.salon_bookings_settings({ filtering: true, ordering: true });
  },
});

export const salon_bookings_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_settings();
    t.crud.updateOnesalon_bookings_settings();
    t.crud.upsertOnesalon_bookings_settings();
    t.crud.deleteOnesalon_bookings_settings();

    t.crud.updateManysalon_bookings_settings();
    t.crud.deleteManysalon_bookings_settings();
  },
});
