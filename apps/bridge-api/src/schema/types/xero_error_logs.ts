import { objectType, extendType } from 'nexus';

export const xero_error_logs = objectType({
  name: 'xero_error_logs',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.type();
    t.model.company_id();
    t.model.error();
    t.model.status_response();
  },
});

export const xero_error_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_error_logs();
    t.crud.xero_error_logs({ filtering: true, ordering: true });
  },
});

export const xero_error_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_error_logs();
    t.crud.updateOnexero_error_logs();
    t.crud.upsertOnexero_error_logs();
    t.crud.deleteOnexero_error_logs();

    t.crud.updateManyxero_error_logs();
    t.crud.deleteManyxero_error_logs();
  },
});
