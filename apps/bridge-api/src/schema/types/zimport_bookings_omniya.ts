import { objectType, extendType } from 'nexus';

export const zimport_bookings_omniya = objectType({
  name: 'zimport_bookings_omniya',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.start_date();
    t.model.end_date();
    t.model.date();
    t.model.user_name();
    t.model.time();
    t.model.client_name();
    t.model.service();
    t.model.title();
  },
});

export const zimport_bookings_omniyaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_bookings_omniya();
    t.crud.zimport_bookings_omniyas({ filtering: true, ordering: true });
  },
});

export const zimport_bookings_omniyaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_bookings_omniya();
    t.crud.updateOnezimport_bookings_omniya();
    t.crud.upsertOnezimport_bookings_omniya();
    t.crud.deleteOnezimport_bookings_omniya();

    t.crud.updateManyzimport_bookings_omniya();
    t.crud.deleteManyzimport_bookings_omniya();
  },
});
