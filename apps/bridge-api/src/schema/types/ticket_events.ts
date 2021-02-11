import { objectType, extendType } from 'nexus';

export const ticket_events = objectType({
  name: 'ticket_events',
  definition(t) {
    t.model.id();
    t.model.eventid();
    t.model.ticket_type();
    t.model.sold();
    t.model.available_tickets();
    t.model.deleted();
  },
});

export const ticket_eventsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ticket_events();
    t.crud.ticket_events({ filtering: true, ordering: true });
  },
});

export const ticket_eventsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneticket_events();
    t.crud.updateOneticket_events();
    t.crud.upsertOneticket_events();
    t.crud.deleteOneticket_events();

    t.crud.updateManyticket_events();
    t.crud.deleteManyticket_events();
  },
});
