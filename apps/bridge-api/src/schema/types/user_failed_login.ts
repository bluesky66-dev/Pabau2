import { objectType, extendType } from 'nexus';

export const user_failed_login = objectType({
  name: 'user_failed_login',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.hash();
    t.model.hash_algor();
    t.model.attempt_date();
    t.model.count();
  },
});

export const user_failed_loginQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_failed_login();
    t.crud.user_failed_logins({ filtering: true, ordering: true });
  },
});

export const user_failed_loginMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_failed_login();
    t.crud.updateOneuser_failed_login();
    t.crud.upsertOneuser_failed_login();
    t.crud.deleteOneuser_failed_login();

    t.crud.updateManyuser_failed_login();
    t.crud.deleteManyuser_failed_login();
  },
});
