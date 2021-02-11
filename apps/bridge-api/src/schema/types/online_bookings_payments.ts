import { objectType, extendType } from 'nexus';

export const online_bookings_payments = objectType({
  name: 'online_bookings_payments',
  definition(t) {
    t.model.id();
    t.model.signature();
    t.model.json_data();
    t.model.occupier();
  },
});

export const online_bookings_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.online_bookings_payments();
    t.crud.online_bookings_payments({ filtering: true, ordering: true });
  },
});

export const online_bookings_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneonline_bookings_payments();
    t.crud.updateOneonline_bookings_payments();
    t.crud.upsertOneonline_bookings_payments();
    t.crud.deleteOneonline_bookings_payments();

    t.crud.updateManyonline_bookings_payments();
    t.crud.deleteManyonline_bookings_payments();
  },
});
