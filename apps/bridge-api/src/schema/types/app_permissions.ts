import { objectType, extendType } from 'nexus';

export const app_permissions = objectType({
  name: 'app_permissions',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.appid();
  },
});

export const app_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.app_permissions();
    t.crud.app_permissions({ filtering: true, ordering: true });
  },
});

export const app_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapp_permissions();
    t.crud.updateOneapp_permissions();
    t.crud.upsertOneapp_permissions();
    t.crud.deleteOneapp_permissions();

    t.crud.updateManyapp_permissions();
    t.crud.deleteManyapp_permissions();
  },
});
