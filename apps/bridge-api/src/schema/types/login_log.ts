import { objectType, extendType } from 'nexus';

export const login_log = objectType({
  name: 'login_log',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.occupier();
    t.model.login_datetime();
    t.model.logout_datetime();
    t.model.ip_address();
    t.model.is_mobile();
    t.model.user_agent();
  },
});

export const login_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.login_log();
    t.crud.login_logs({ filtering: true, ordering: true });
  },
});

export const login_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelogin_log();
    t.crud.updateOnelogin_log();
    t.crud.upsertOnelogin_log();
    t.crud.deleteOnelogin_log();

    t.crud.updateManylogin_log();
    t.crud.deleteManylogin_log();
  },
});
