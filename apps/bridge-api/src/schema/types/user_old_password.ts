import { objectType, extendType } from 'nexus';

export const user_old_password = objectType({
  name: 'user_old_password',
  definition(t) {
    t.model.user_old_password_id();
    t.model.user_id();
    t.model.hash();
    t.model.hash_algor();
    t.model.salt();
    t.model.created_at();
  },
});

export const user_old_passwordQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_old_password();
    t.crud.user_old_passwords({ filtering: true, ordering: true });
  },
});

export const user_old_passwordMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_old_password();
    t.crud.updateOneuser_old_password();
    t.crud.upsertOneuser_old_password();
    t.crud.deleteOneuser_old_password();

    t.crud.updateManyuser_old_password();
    t.crud.deleteManyuser_old_password();
  },
});
