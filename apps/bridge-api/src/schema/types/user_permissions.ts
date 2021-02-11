import { objectType, extendType } from 'nexus';

export const user_permissions = objectType({
  name: 'user_permissions',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.page();
  },
});

export const user_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_permissions();
    t.crud.user_permissions({ filtering: true, ordering: true });
  },
});

export const user_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_permissions();
    t.crud.updateOneuser_permissions();
    t.crud.upsertOneuser_permissions();
    t.crud.deleteOneuser_permissions();

    t.crud.updateManyuser_permissions();
    t.crud.deleteManyuser_permissions();
  },
});
