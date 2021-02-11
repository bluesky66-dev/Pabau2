import { objectType, extendType } from 'nexus';

export const engage_logs = objectType({
  name: 'engage_logs',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.succeeded();
    t.model.skipped();
    t.model.type();
    t.model.event_id();
    t.model.date();
    t.model.test();
  },
});

export const engage_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_logs();
    t.crud.engage_logs({ filtering: true, ordering: true });
  },
});

export const engage_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_logs();
    t.crud.updateOneengage_logs();
    t.crud.upsertOneengage_logs();
    t.crud.deleteOneengage_logs();

    t.crud.updateManyengage_logs();
    t.crud.deleteManyengage_logs();
  },
});
