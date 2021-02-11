import { objectType, extendType } from 'nexus';

export const salon_bookings_clinics_settings = objectType({
  name: 'salon_bookings_clinics_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.uid();
    t.model.clinic_id();
  },
});

export const salon_bookings_clinics_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_clinics_settings();
    t.crud.salon_bookings_clinics_settings({ filtering: true, ordering: true });
  },
});

export const salon_bookings_clinics_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_clinics_settings();
    t.crud.updateOnesalon_bookings_clinics_settings();
    t.crud.upsertOnesalon_bookings_clinics_settings();
    t.crud.deleteOnesalon_bookings_clinics_settings();

    t.crud.updateManysalon_bookings_clinics_settings();
    t.crud.deleteManysalon_bookings_clinics_settings();
  },
});
