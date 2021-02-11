import { objectType, extendType } from 'nexus';

export const sql_failed_transactions = objectType({
  name: 'sql_failed_transactions',
  definition(t) {
    t.model.fail_id();
    t.model.request_uri();
    t.model.get_data();
    t.model.post_data();
    t.model.sql_query();
    t.model.resp_array();
  },
});

export const sql_failed_transactionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sql_failed_transactions();
    t.crud.sql_failed_transactions({ filtering: true, ordering: true });
  },
});

export const sql_failed_transactionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesql_failed_transactions();
    t.crud.updateOnesql_failed_transactions();
    t.crud.upsertOnesql_failed_transactions();
    t.crud.deleteOnesql_failed_transactions();

    t.crud.updateManysql_failed_transactions();
    t.crud.deleteManysql_failed_transactions();
  },
});
