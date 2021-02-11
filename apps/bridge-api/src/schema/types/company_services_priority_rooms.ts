import { objectType, extendType } from 'nexus';

export const company_services_priority_rooms = objectType({
  name: 'company_services_priority_rooms',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.service_id();
    t.model.room_id();
    t.model.priority_order();
  },
});

export const company_services_priority_roomsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_priority_rooms();
    t.crud.company_services_priority_rooms({ filtering: true, ordering: true });
  },
});

export const company_services_priority_roomsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_priority_rooms();
    t.crud.updateOnecompany_services_priority_rooms();
    t.crud.upsertOnecompany_services_priority_rooms();
    t.crud.deleteOnecompany_services_priority_rooms();

    t.crud.updateManycompany_services_priority_rooms();
    t.crud.deleteManycompany_services_priority_rooms();
  },
});
