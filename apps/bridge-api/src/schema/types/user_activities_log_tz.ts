import { objectType, extendType } from 'nexus';

export const user_activities_log_tz = objectType({
  name: 'user_activities_log_tz',
  definition(t) {
    t.model.ID();
    t.model.userId();
    t.model.company();
    t.model.accessId();
    t.model.type();
    t.model.template();
    t.model.time();
    t.model.time_tz();
    t.model.status();
    t.model.ipAddress();
  },
});

export const user_activities_log_tzQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_activities_log_tz();
    t.crud.user_activities_log_tzs({ filtering: true, ordering: true });
  },
});

export const user_activities_log_tzMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_activities_log_tz();
    t.crud.updateOneuser_activities_log_tz();
    t.crud.upsertOneuser_activities_log_tz();
    t.crud.deleteOneuser_activities_log_tz();

    t.crud.updateManyuser_activities_log_tz();
    t.crud.deleteManyuser_activities_log_tz();
  },
});
