import { objectType, extendType } from 'nexus';

export const user_mobile_permissions = objectType({
  name: 'user_mobile_permissions',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.company_id();
    t.model.cal();
    t.model.reviews();
    t.model.reports();
    t.model.contacts();
    t.model.journey();
    t.model.register();
    t.model.dashboard();
  },
});

export const user_mobile_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_mobile_permissions();
    t.crud.user_mobile_permissions({ filtering: true, ordering: true });
  },
});

export const user_mobile_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_mobile_permissions();
    t.crud.updateOneuser_mobile_permissions();
    t.crud.upsertOneuser_mobile_permissions();
    t.crud.deleteOneuser_mobile_permissions();

    t.crud.updateManyuser_mobile_permissions();
    t.crud.deleteManyuser_mobile_permissions();
  },
});
