import { objectType, extendType } from 'nexus';

export const user_activities_log = objectType({
  name: 'user_activities_log',
  definition(t) {
    t.model.ID();
    t.model.userId();
    t.model.company();
    t.model.accessId();
    t.model.type();
    t.model.template();
    t.model.time();
    t.model.status();
    t.model.ipAddress();
    t.model.pabau_annoucement();
    t.model.location_id();
  },
});

export const user_activities_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_activities_log();
    t.crud.user_activities_logs({ filtering: true, ordering: true });
  },
});

export const user_activities_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_activities_log();
    t.crud.updateOneuser_activities_log();
    t.crud.upsertOneuser_activities_log();
    t.crud.deleteOneuser_activities_log();

    t.crud.updateManyuser_activities_log();
    t.crud.deleteManyuser_activities_log();
  },
});
