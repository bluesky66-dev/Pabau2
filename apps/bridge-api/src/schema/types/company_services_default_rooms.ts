import { objectType, extendType } from 'nexus';

export const company_services_default_rooms = objectType({
  name: 'company_services_default_rooms',
  definition(t) {
    t.model.id();
    t.model.default_rooms();
    t.model.occupier();
    t.model.group_id();
  },
});

export const company_services_default_roomsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_default_rooms();
    t.crud.company_services_default_rooms({ filtering: true, ordering: true });
  },
});

export const company_services_default_roomsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_default_rooms();
    t.crud.updateOnecompany_services_default_rooms();
    t.crud.upsertOnecompany_services_default_rooms();
    t.crud.deleteOnecompany_services_default_rooms();

    t.crud.updateManycompany_services_default_rooms();
    t.crud.deleteManycompany_services_default_rooms();
  },
});
