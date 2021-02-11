import { objectType, extendType } from 'nexus';

export const ticket = objectType({
  name: 'ticket',
  definition(t) {
    t.model.ticketid();
    t.model.price();
    t.model.email();
    t.model.isvalid();
    t.model.code();
    t.model.eventid();
    t.model.purchase_date();
    t.model.occupier();
    t.model.STATUS();
    t.model.ticket_type();
  },
});

export const ticketQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ticket();
    t.crud.tickets({ filtering: true, ordering: true });
  },
});

export const ticketMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneticket();
    t.crud.updateOneticket();
    t.crud.upsertOneticket();
    t.crud.deleteOneticket();

    t.crud.updateManyticket();
    t.crud.deleteManyticket();
  },
});
