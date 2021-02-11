import { objectType, extendType } from 'nexus';

export const salon_bookings_confirmation = objectType({
  name: 'salon_bookings_confirmation',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.confirmation_date();
    t.model.is_confirmed();
    t.model.contact_id();
    t.model.occupier();
    t.model.updated_on();
  },
});

export const salon_bookings_confirmationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_confirmation();
    t.crud.salon_bookings_confirmations({ filtering: true, ordering: true });
  },
});

export const salon_bookings_confirmationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_confirmation();
    t.crud.updateOnesalon_bookings_confirmation();
    t.crud.upsertOnesalon_bookings_confirmation();
    t.crud.deleteOnesalon_bookings_confirmation();

    t.crud.updateManysalon_bookings_confirmation();
    t.crud.deleteManysalon_bookings_confirmation();
  },
});
