import { objectType, extendType } from 'nexus';

export const zimport_compare_bookings = objectType({
  name: 'zimport_compare_bookings',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.thingie();
    t.model.time();
    t.model.cust();
    t.model.service();
    t.model.imported();
    t.model.start_date();
  },
});

export const zimport_compare_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_compare_bookings();
    t.crud.zimport_compare_bookings({ filtering: true, ordering: true });
  },
});

export const zimport_compare_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_compare_bookings();
    t.crud.updateOnezimport_compare_bookings();
    t.crud.upsertOnezimport_compare_bookings();
    t.crud.deleteOnezimport_compare_bookings();

    t.crud.updateManyzimport_compare_bookings();
    t.crud.deleteManyzimport_compare_bookings();
  },
});
