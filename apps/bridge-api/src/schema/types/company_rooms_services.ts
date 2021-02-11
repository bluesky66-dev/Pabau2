import { objectType, extendType } from 'nexus';

export const company_rooms_services = objectType({
  name: 'company_rooms_services',
  definition(t) {
    t.model.id();
    t.model.room_id();
    t.model.service_id();
    t.model.occupier();
    t.model.priority_order();
    t.model.imported();
  },
});

export const company_rooms_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_rooms_services();
    t.crud.company_rooms_services({ filtering: true, ordering: true });
  },
});

export const company_rooms_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_rooms_services();
    t.crud.updateOnecompany_rooms_services();
    t.crud.upsertOnecompany_rooms_services();
    t.crud.deleteOnecompany_rooms_services();

    t.crud.updateManycompany_rooms_services();
    t.crud.deleteManycompany_rooms_services();
  },
});
