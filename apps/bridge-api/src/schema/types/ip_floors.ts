import { objectType, extendType } from 'nexus';

export const ip_floors = objectType({
  name: 'ip_floors',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.floor_url();
    t.model.floor_thumbnail();
    t.model.company_id();
    t.model.floor_order();
  },
});

export const ip_floorsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_floors();
    t.crud.ip_floors({ filtering: true, ordering: true });
  },
});

export const ip_floorsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_floors();
    t.crud.updateOneip_floors();
    t.crud.upsertOneip_floors();
    t.crud.deleteOneip_floors();

    t.crud.updateManyip_floors();
    t.crud.deleteManyip_floors();
  },
});
