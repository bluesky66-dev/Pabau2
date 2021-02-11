import { objectType, extendType } from 'nexus';

export const bug_log = objectType({
  name: 'bug_log',
  definition(t) {
    t.model.id();
    t.model.bug_message();
    t.model.datetime();
    t.model.uid();
    t.model.related_id();
  },
});

export const bug_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bug_log();
    t.crud.bug_logs({ filtering: true, ordering: true });
  },
});

export const bug_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebug_log();
    t.crud.updateOnebug_log();
    t.crud.upsertOnebug_log();
    t.crud.deleteOnebug_log();

    t.crud.updateManybug_log();
    t.crud.deleteManybug_log();
  },
});
