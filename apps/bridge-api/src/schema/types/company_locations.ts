import { objectType, extendType } from 'nexus';

export const company_locations = objectType({
  name: 'company_locations',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.location();
  },
});

export const company_locationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_locations();
    t.crud.company_locations({ filtering: true, ordering: true });
  },
});

export const company_locationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_locations();
    t.crud.updateOnecompany_locations();
    t.crud.upsertOnecompany_locations();
    t.crud.deleteOnecompany_locations();

    t.crud.updateManycompany_locations();
    t.crud.deleteManycompany_locations();
  },
});
