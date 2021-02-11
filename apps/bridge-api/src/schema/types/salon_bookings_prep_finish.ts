import { objectType, extendType } from 'nexus';

export const salon_bookings_prep_finish = objectType({
  name: 'salon_bookings_prep_finish',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.booking_id();
    t.model.prep_time();
    t.model.finish_time();
  },
});

export const salon_bookings_prep_finishQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_prep_finish();
    t.crud.salon_bookings_prep_finishes({ filtering: true, ordering: true });
  },
});

export const salon_bookings_prep_finishMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_prep_finish();
    t.crud.updateOnesalon_bookings_prep_finish();
    t.crud.upsertOnesalon_bookings_prep_finish();
    t.crud.deleteOnesalon_bookings_prep_finish();

    t.crud.updateManysalon_bookings_prep_finish();
    t.crud.deleteManysalon_bookings_prep_finish();
  },
});
