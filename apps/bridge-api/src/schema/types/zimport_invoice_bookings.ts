import { objectType, extendType } from 'nexus';

export const zimport_invoice_bookings = objectType({
  name: 'zimport_invoice_bookings',
  definition(t) {
    t.model.id();
    t.model.invoice_no();
    t.model.patient_id();
    t.model.booking_id();
    t.model.occupier();
  },
});

export const zimport_invoice_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_invoice_bookings();
    t.crud.zimport_invoice_bookings({ filtering: true, ordering: true });
  },
});

export const zimport_invoice_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_invoice_bookings();
    t.crud.updateOnezimport_invoice_bookings();
    t.crud.upsertOnezimport_invoice_bookings();
    t.crud.deleteOnezimport_invoice_bookings();

    t.crud.updateManyzimport_invoice_bookings();
    t.crud.deleteManyzimport_invoice_bookings();
  },
});
