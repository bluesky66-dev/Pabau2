import { objectType, extendType } from 'nexus';

export const company_branch_variables = objectType({
  name: 'company_branch_variables',
  definition(t) {
    t.model.id();
    t.model.branch_id();
    t.model.key();
    t.model.value();
    t.model.date_created();
    t.model.date_updated();
  },
});

export const company_branch_variablesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_branch_variables();
    t.crud.company_branch_variables({ filtering: true, ordering: true });
  },
});

export const company_branch_variablesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_branch_variables();
    t.crud.updateOnecompany_branch_variables();
    t.crud.upsertOnecompany_branch_variables();
    t.crud.deleteOnecompany_branch_variables();

    t.crud.updateManycompany_branch_variables();
    t.crud.deleteManycompany_branch_variables();
  },
});
