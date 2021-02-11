import { objectType, extendType } from 'nexus';

export const company_rooms_locations = objectType({
  name: 'company_rooms_locations',
  definition(t) {
    t.model.id();
    t.model.room_id();
    t.model.location_id();
  },
});

export const company_rooms_locationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_rooms_locations();
    t.crud.company_rooms_locations({ filtering: true, ordering: true });
  },
});

export const company_rooms_locationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_rooms_locations();
    t.crud.updateOnecompany_rooms_locations();
    t.crud.upsertOnecompany_rooms_locations();
    t.crud.deleteOnecompany_rooms_locations();

    t.crud.updateManycompany_rooms_locations();
    t.crud.deleteManycompany_rooms_locations();
  },
});
