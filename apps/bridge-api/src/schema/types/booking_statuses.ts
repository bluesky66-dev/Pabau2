import { objectType, extendType } from 'nexus';

export const booking_statuses = objectType({
  name: 'booking_statuses',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.icon();
    t.model.icon_color();
    t.model.company_id();
    t.model.indicator();
    t.model.basic_field();
    t.model.ord();
    t.model.track_time();
  },
});

export const booking_statusesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.booking_statuses();
    t.crud.booking_statuses({ filtering: true, ordering: true });
  },
});

export const booking_statusesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebooking_statuses();
    t.crud.updateOnebooking_statuses();
    t.crud.upsertOnebooking_statuses();
    t.crud.deleteOnebooking_statuses();

    t.crud.updateManybooking_statuses();
    t.crud.deleteManybooking_statuses();
  },
});
