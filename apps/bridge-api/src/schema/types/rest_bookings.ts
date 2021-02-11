import { objectType, extendType } from 'nexus';

export const rest_bookings = objectType({
  name: 'rest_bookings',
  definition(t) {
    t.model.id();
    t.model.table_id();
    t.model.title();
    t.model.start_date();
    t.model.end_date();
    t.model.UID();
    t.model.contact_id();
    t.model.guest_count();
    t.model.occupier();
    t.model.create_date();
    t.model.status();
    t.model.Online();
    t.model.invoice_id();
  },
});

export const rest_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rest_bookings();
    t.crud.rest_bookings({ filtering: true, ordering: true });
  },
});

export const rest_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerest_bookings();
    t.crud.updateOnerest_bookings();
    t.crud.upsertOnerest_bookings();
    t.crud.deleteOnerest_bookings();

    t.crud.updateManyrest_bookings();
    t.crud.deleteManyrest_bookings();
  },
});
