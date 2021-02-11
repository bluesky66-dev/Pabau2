import { objectType, extendType } from 'nexus';

export const communication_log_fails = objectType({
  name: 'communication_log_fails',
  definition(t) {
    t.model.id();
    t.model.sql_query();
  },
});

export const communication_log_failsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log_fails();
    t.crud.communication_log_fails({ filtering: true, ordering: true });
  },
});

export const communication_log_failsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log_fails();
    t.crud.updateOnecommunication_log_fails();
    t.crud.upsertOnecommunication_log_fails();
    t.crud.deleteOnecommunication_log_fails();

    t.crud.updateManycommunication_log_fails();
    t.crud.deleteManycommunication_log_fails();
  },
});
