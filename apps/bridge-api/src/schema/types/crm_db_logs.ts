import { objectType, extendType } from 'nexus';

export const crm_db_logs = objectType({
  name: 'crm_db_logs',
  definition(t) {
    t.model.id();
    t.model.sql_query();
    t.model.wait_time();
    t.model.total_hits();
    t.model.request_uri();
    t.model.created_at();
    t.model.modified_at();
    t.model.company_id();
  },
});

export const crm_db_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.crm_db_logs();
    t.crud.crm_db_logs({ filtering: true, ordering: true });
  },
});

export const crm_db_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecrm_db_logs();
    t.crud.updateOnecrm_db_logs();
    t.crud.upsertOnecrm_db_logs();
    t.crud.deleteOnecrm_db_logs();

    t.crud.updateManycrm_db_logs();
    t.crud.deleteManycrm_db_logs();
  },
});
