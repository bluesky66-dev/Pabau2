import { objectType, extendType } from 'nexus';

export const spam_log = objectType({
  name: 'spam_log',
  definition(t) {
    t.model.id();
    t.model.ip();
    t.model.reason();
    t.model.company_id();
    t.model.date();
    t.model.data();
  },
});

export const spam_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.spam_log();
    t.crud.spam_logs({ filtering: true, ordering: true });
  },
});

export const spam_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnespam_log();
    t.crud.updateOnespam_log();
    t.crud.upsertOnespam_log();
    t.crud.deleteOnespam_log();

    t.crud.updateManyspam_log();
    t.crud.deleteManyspam_log();
  },
});
