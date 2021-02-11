import { objectType, extendType } from 'nexus';

export const user_variables = objectType({
  name: 'user_variables',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.key();
    t.model.value();
    t.model.date_created();
    t.model.date_updated();
  },
});

export const user_variablesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_variables();
    t.crud.user_variables({ filtering: true, ordering: true });
  },
});

export const user_variablesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_variables();
    t.crud.updateOneuser_variables();
    t.crud.upsertOneuser_variables();
    t.crud.deleteOneuser_variables();

    t.crud.updateManyuser_variables();
    t.crud.deleteManyuser_variables();
  },
});
