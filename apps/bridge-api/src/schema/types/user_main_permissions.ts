import { objectType, extendType } from 'nexus';

export const user_main_permissions = objectType({
  name: 'user_main_permissions',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.delete_alert_notes();
  },
});

export const user_main_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_main_permissions();
    t.crud.user_main_permissions({ filtering: true, ordering: true });
  },
});

export const user_main_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_main_permissions();
    t.crud.updateOneuser_main_permissions();
    t.crud.upsertOneuser_main_permissions();
    t.crud.deleteOneuser_main_permissions();

    t.crud.updateManyuser_main_permissions();
    t.crud.deleteManyuser_main_permissions();
  },
});
