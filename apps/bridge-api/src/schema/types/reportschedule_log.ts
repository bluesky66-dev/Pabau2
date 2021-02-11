import { objectType, extendType } from 'nexus';

export const reportschedule_log = objectType({
  name: 'reportschedule_log',
  definition(t) {
    t.model.id();
    t.model.setting_id();
    t.model.UID();
    t.model.reports();
    t.model.datetime();
    t.model.occupier();
    t.model.message();
    t.model.is_test();
  },
});

export const reportschedule_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reportschedule_log();
    t.crud.reportschedule_logs({ filtering: true, ordering: true });
  },
});

export const reportschedule_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereportschedule_log();
    t.crud.updateOnereportschedule_log();
    t.crud.upsertOnereportschedule_log();
    t.crud.deleteOnereportschedule_log();

    t.crud.updateManyreportschedule_log();
    t.crud.deleteManyreportschedule_log();
  },
});
