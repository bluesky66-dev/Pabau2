import { objectType, extendType } from 'nexus';

export const login_attempts = objectType({
  name: 'login_attempts',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.last_attempt();
    t.model.count();
    t.model.phone_attempt_count();
    t.model.client_ip();
  },
});

export const login_attemptsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.login_attempts();
    t.crud.login_attempts({ filtering: true, ordering: true });
  },
});

export const login_attemptsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelogin_attempts();
    t.crud.updateOnelogin_attempts();
    t.crud.upsertOnelogin_attempts();
    t.crud.deleteOnelogin_attempts();

    t.crud.updateManylogin_attempts();
    t.crud.deleteManylogin_attempts();
  },
});
