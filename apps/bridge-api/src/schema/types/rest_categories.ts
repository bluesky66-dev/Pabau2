import { objectType, extendType } from 'nexus';

export const rest_categories = objectType({
  name: 'rest_categories',
  definition(t) {
    t.model.ID();
    t.model.Name();
    t.model.Description();
    t.model.Occupier();
  },
});

export const rest_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rest_categories();
    t.crud.rest_categories({ filtering: true, ordering: true });
  },
});

export const rest_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerest_categories();
    t.crud.updateOnerest_categories();
    t.crud.upsertOnerest_categories();
    t.crud.deleteOnerest_categories();

    t.crud.updateManyrest_categories();
    t.crud.deleteManyrest_categories();
  },
});
