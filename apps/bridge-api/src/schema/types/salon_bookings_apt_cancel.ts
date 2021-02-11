import { objectType, extendType } from 'nexus';

export const salon_bookings_apt_cancel = objectType({
  name: 'salon_bookings_apt_cancel',
  definition(t) {
    t.model.id();
    t.model.appointment_id();
    t.model.type();
    t.model.reason_type();
    t.model.reason();
    t.model.created_date();
    t.model.last_updated_date();
    t.model.cancel_by();
    t.model.cancel_reason_id();
  },
});

export const salon_bookings_apt_cancelQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_apt_cancel();
    t.crud.salon_bookings_apt_cancels({ filtering: true, ordering: true });
  },
});

export const salon_bookings_apt_cancelMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_apt_cancel();
    t.crud.updateOnesalon_bookings_apt_cancel();
    t.crud.upsertOnesalon_bookings_apt_cancel();
    t.crud.deleteOnesalon_bookings_apt_cancel();

    t.crud.updateManysalon_bookings_apt_cancel();
    t.crud.deleteManysalon_bookings_apt_cancel();
  },
});
