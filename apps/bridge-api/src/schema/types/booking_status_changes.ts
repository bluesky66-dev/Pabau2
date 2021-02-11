import { objectType, extendType } from 'nexus';

export const booking_status_changes = objectType({
  name: 'booking_status_changes',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.status();
    t.model.start_date();
    t.model.end_date();
    t.model.company_id();
    t.model.user_id();
  },
});

export const booking_status_changesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.booking_status_changes();
    t.crud.booking_status_changes({ filtering: true, ordering: true });
  },
});

export const booking_status_changesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebooking_status_changes();
    t.crud.updateOnebooking_status_changes();
    t.crud.upsertOnebooking_status_changes();
    t.crud.deleteOnebooking_status_changes();

    t.crud.updateManybooking_status_changes();
    t.crud.deleteManybooking_status_changes();
  },
});
