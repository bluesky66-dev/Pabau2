import { objectType, extendType } from 'nexus';

export const connect_bookings_log = objectType({
  name: 'connect_bookings_log',
  definition(t) {
    t.model.id();
    t.model.appointment_id();
    t.model.contact_id();
    t.model.mobile();
    t.model.browser();
    t.model.date_tracked();
    t.model.company_id();
  },
});

export const connect_bookings_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_bookings_log();
    t.crud.connect_bookings_logs({ filtering: true, ordering: true });
  },
});

export const connect_bookings_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_bookings_log();
    t.crud.updateOneconnect_bookings_log();
    t.crud.upsertOneconnect_bookings_log();
    t.crud.deleteOneconnect_bookings_log();

    t.crud.updateManyconnect_bookings_log();
    t.crud.deleteManyconnect_bookings_log();
  },
});
