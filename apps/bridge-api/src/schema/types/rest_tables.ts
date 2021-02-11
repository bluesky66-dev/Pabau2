import { objectType, extendType } from 'nexus';

export const rest_tables = objectType({
  name: 'rest_tables',
  definition(t) {
    t.model.ID();
    t.model.rest_category_id();
    t.model.Name();
    t.model.Description();
    t.model.Size();
    t.model.Covers();
    t.model.Occupier();
  },
});

export const rest_tablesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rest_tables();
    t.crud.rest_tables({ filtering: true, ordering: true });
  },
});

export const rest_tablesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerest_tables();
    t.crud.updateOnerest_tables();
    t.crud.upsertOnerest_tables();
    t.crud.deleteOnerest_tables();

    t.crud.updateManyrest_tables();
    t.crud.deleteManyrest_tables();
  },
});
