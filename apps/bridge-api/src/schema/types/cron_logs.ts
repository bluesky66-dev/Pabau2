import { objectType, extendType } from 'nexus';

export const cron_logs = objectType({
  name: 'cron_logs',
  definition(t) {
    t.model.id();
    t.model.type();
    t.model.date();
  },
});

export const cron_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cron_logs();
    t.crud.cron_logs({ filtering: true, ordering: true });
  },
});

export const cron_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecron_logs();
    t.crud.updateOnecron_logs();
    t.crud.upsertOnecron_logs();
    t.crud.deleteOnecron_logs();

    t.crud.updateManycron_logs();
    t.crud.deleteManycron_logs();
  },
});
