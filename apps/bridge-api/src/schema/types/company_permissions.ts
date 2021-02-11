import { objectType, extendType } from 'nexus';

export const company_permissions = objectType({
  name: 'company_permissions',
  definition(t) {
    t.model.id();
    t.model.companyid();
    t.model.section();
  },
});

export const company_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_permissions();
    t.crud.company_permissions({ filtering: true, ordering: true });
  },
});

export const company_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_permissions();
    t.crud.updateOnecompany_permissions();
    t.crud.upsertOnecompany_permissions();
    t.crud.deleteOnecompany_permissions();

    t.crud.updateManycompany_permissions();
    t.crud.deleteManycompany_permissions();
  },
});
