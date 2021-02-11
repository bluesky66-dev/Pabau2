import { objectType, extendType } from 'nexus';

export const zcosmetica_users = objectType({
  name: 'zcosmetica_users',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.full_name();
  },
});

export const zcosmetica_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zcosmetica_users();
    t.crud.zcosmetica_users({ filtering: true, ordering: true });
  },
});

export const zcosmetica_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezcosmetica_users();
    t.crud.updateOnezcosmetica_users();
    t.crud.upsertOnezcosmetica_users();
    t.crud.deleteOnezcosmetica_users();

    t.crud.updateManyzcosmetica_users();
    t.crud.deleteManyzcosmetica_users();
  },
});
