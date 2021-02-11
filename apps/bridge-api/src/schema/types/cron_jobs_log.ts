import { objectType, extendType } from 'nexus';

export const cron_jobs_log = objectType({
  name: 'cron_jobs_log',
  definition(t) {
    t.model.id();
    t.model.date_updated();
    t.model.date_created();
    t.model.company();
    t.model.text();
    t.model.severity();
    t.model.ref();
  },
});

export const cron_jobs_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cron_jobs_log();
    t.crud.cron_jobs_logs({ filtering: true, ordering: true });
  },
});

export const cron_jobs_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecron_jobs_log();
    t.crud.updateOnecron_jobs_log();
    t.crud.upsertOnecron_jobs_log();
    t.crud.deleteOnecron_jobs_log();

    t.crud.updateManycron_jobs_log();
    t.crud.deleteManycron_jobs_log();
  },
});
