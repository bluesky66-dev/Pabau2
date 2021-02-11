import { objectType, extendType } from 'nexus';

export const cron_jobs = objectType({
  name: 'cron_jobs',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.user();
    t.model.settings();
    t.model.file();
    t.model.status();
    t.model.date_updated();
    t.model.date_created();
  },
});

export const cron_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cron_jobs();
    t.crud.cron_jobs({ filtering: true, ordering: true });
  },
});

export const cron_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecron_jobs();
    t.crud.updateOnecron_jobs();
    t.crud.upsertOnecron_jobs();
    t.crud.deleteOnecron_jobs();

    t.crud.updateManycron_jobs();
    t.crud.deleteManycron_jobs();
  },
});
