import { objectType, extendType } from 'nexus';

export const salon_bookings_repeats = objectType({
  name: 'salon_bookings_repeats',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.start();
    t.model.end();
    t.model.repeat_start();
    t.model.repeat_end();
    t.model.day_sun();
    t.model.day_mon();
    t.model.day_tue();
    t.model.day_wed();
    t.model.day_thu();
    t.model.day_fri();
    t.model.day_sat();
    t.model.every();
    t.model.unit();
    t.model.repeat_until();
  },
});

export const salon_bookings_repeatsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_repeats();
    t.crud.salon_bookings_repeats({ filtering: true, ordering: true });
  },
});

export const salon_bookings_repeatsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_repeats();
    t.crud.updateOnesalon_bookings_repeats();
    t.crud.upsertOnesalon_bookings_repeats();
    t.crud.deleteOnesalon_bookings_repeats();

    t.crud.updateManysalon_bookings_repeats();
    t.crud.deleteManysalon_bookings_repeats();
  },
});
