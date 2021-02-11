import { objectType, extendType } from 'nexus';

export const company_departments = objectType({
  name: 'company_departments',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.department();
  },
});

export const company_departmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_departments();
    t.crud.company_departments({ filtering: true, ordering: true });
  },
});

export const company_departmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_departments();
    t.crud.updateOnecompany_departments();
    t.crud.upsertOnecompany_departments();
    t.crud.deleteOnecompany_departments();

    t.crud.updateManycompany_departments();
    t.crud.deleteManycompany_departments();
  },
});
