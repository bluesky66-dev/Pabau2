import { objectType, extendType } from 'nexus';

export const ticket_types = objectType({
  name: 'ticket_types',
  definition(t) {
    t.model.type_id();
    t.model.ticket_type_name();
    t.model.ticket_price();
    t.model.ticket_description();
    t.model.tickets_available();
    t.model.occupier();
    t.model.brand_id();
    t.model.event_id();
    t.model.deleted();
  },
});

export const ticket_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ticket_types();
    t.crud.ticket_types({ filtering: true, ordering: true });
  },
});

export const ticket_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneticket_types();
    t.crud.updateOneticket_types();
    t.crud.upsertOneticket_types();
    t.crud.deleteOneticket_types();

    t.crud.updateManyticket_types();
    t.crud.deleteManyticket_types();
  },
});
