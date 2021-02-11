import { objectType, extendType } from 'nexus';

export const video_call_log = objectType({
  name: 'video_call_log',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_id();
    t.model.date();
    t.model.extra();
    t.model.mins_used();
  },
});

export const video_call_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.video_call_log();
    t.crud.video_call_logs({ filtering: true, ordering: true });
  },
});

export const video_call_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevideo_call_log();
    t.crud.updateOnevideo_call_log();
    t.crud.upsertOnevideo_call_log();
    t.crud.deleteOnevideo_call_log();

    t.crud.updateManyvideo_call_log();
    t.crud.deleteManyvideo_call_log();
  },
});
