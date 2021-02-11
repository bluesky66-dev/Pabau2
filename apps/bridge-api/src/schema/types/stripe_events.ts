import { objectType, extendType } from 'nexus';

export const stripe_events = objectType({
  name: 'stripe_events',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.type();
    t.model.date();
    t.model.event_data();
  },
});

export const stripe_eventsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.stripe_events();
    t.crud.stripe_events({ filtering: true, ordering: true });
  },
});

export const stripe_eventsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestripe_events();
    t.crud.updateOnestripe_events();
    t.crud.upsertOnestripe_events();
    t.crud.deleteOnestripe_events();

    t.crud.updateManystripe_events();
    t.crud.deleteManystripe_events();
  },
});
