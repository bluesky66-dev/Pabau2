import { objectType, extendType } from 'nexus';

export const company_variables = objectType({
  name: 'company_variables',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.key();
    t.model.value();
    t.model.date_created();
  },
});

export const company_variablesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_variables();
    t.crud.company_variables({ filtering: true, ordering: true });
  },
});

export const company_variablesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_variables();
    t.crud.updateOnecompany_variables();
    t.crud.upsertOnecompany_variables();
    t.crud.deleteOnecompany_variables();

    t.crud.updateManycompany_variables();
    t.crud.deleteManycompany_variables();
  },
});
