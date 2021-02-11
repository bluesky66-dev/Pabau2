import { objectType, extendType } from 'nexus';

export const salon_bookings_history = objectType({
  name: 'salon_bookings_history',
  definition(t) {
    t.model.id();
    t.model.old_booking_id();
    t.model.new_booking_id();
    t.model.before_startdate();
    t.model.before_enddate();
    t.model.after_startdate();
    t.model.after_enddate();
    t.model.before_status();
    t.model.after_status();
    t.model.before_service();
    t.model.after_service();
    t.model.CreatedDate();
    t.model.UID();
    t.model.mode();
    t.model.occupier();
  },
});

export const salon_bookings_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_history();
    t.crud.salon_bookings_histories({ filtering: true, ordering: true });
  },
});

export const salon_bookings_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_history();
    t.crud.updateOnesalon_bookings_history();
    t.crud.upsertOnesalon_bookings_history();
    t.crud.deleteOnesalon_bookings_history();

    t.crud.updateManysalon_bookings_history();
    t.crud.deleteManysalon_bookings_history();
  },
});
