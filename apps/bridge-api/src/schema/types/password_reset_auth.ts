import { objectType, extendType } from 'nexus';

export const password_reset_auth = objectType({
  name: 'password_reset_auth',
  definition(t) {
    t.model.id();
    t.model.key_code();
    t.model.username();
    t.model.old_password();
    t.model.date();
  },
});

export const password_reset_authQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.password_reset_auth();
    t.crud.password_reset_auths({ filtering: true, ordering: true });
  },
});

export const password_reset_authMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepassword_reset_auth();
    t.crud.updateOnepassword_reset_auth();
    t.crud.upsertOnepassword_reset_auth();
    t.crud.deleteOnepassword_reset_auth();

    t.crud.updateManypassword_reset_auth();
    t.crud.deleteManypassword_reset_auth();
  },
});
