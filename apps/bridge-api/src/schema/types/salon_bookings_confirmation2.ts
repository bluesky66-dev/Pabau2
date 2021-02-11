import { objectType, extendType } from 'nexus';

export const salon_bookings_confirmation2 = objectType({
  name: 'salon_bookings_confirmation2',
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

export const salon_bookings_confirmation2Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_confirmation2();
    t.crud.salon_bookings_confirmation2s({ filtering: true, ordering: true });
  },
});

export const salon_bookings_confirmation2Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_confirmation2();
    t.crud.updateOnesalon_bookings_confirmation2();
    t.crud.upsertOnesalon_bookings_confirmation2();
    t.crud.deleteOnesalon_bookings_confirmation2();

    t.crud.updateManysalon_bookings_confirmation2();
    t.crud.deleteManysalon_bookings_confirmation2();
  },
});
