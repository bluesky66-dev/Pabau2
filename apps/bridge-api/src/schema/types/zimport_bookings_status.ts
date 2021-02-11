import { objectType, extendType } from 'nexus';

export const zimport_bookings_status = objectType({
  name: 'zimport_bookings_status',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.status();
    t.model.added();
  },
});

export const zimport_bookings_statusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_bookings_status();
    t.crud.zimport_bookings_statuses({ filtering: true, ordering: true });
  },
});

export const zimport_bookings_statusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_bookings_status();
    t.crud.updateOnezimport_bookings_status();
    t.crud.upsertOnezimport_bookings_status();
    t.crud.deleteOnezimport_bookings_status();

    t.crud.updateManyzimport_bookings_status();
    t.crud.deleteManyzimport_bookings_status();
  },
});
