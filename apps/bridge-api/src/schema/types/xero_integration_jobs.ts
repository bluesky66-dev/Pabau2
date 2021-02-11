import { objectType, extendType } from 'nexus';

export const xero_integration_jobs = objectType({
  name: 'xero_integration_jobs',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.invoice_guid();
    t.model.xero_invoice_id();
    t.model.status();
    t.model.response();
    t.model.created_at();
    t.model.modified_at();
  },
});

export const xero_integration_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_integration_jobs();
    t.crud.xero_integration_jobs({ filtering: true, ordering: true });
  },
});

export const xero_integration_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_integration_jobs();
    t.crud.updateOnexero_integration_jobs();
    t.crud.upsertOnexero_integration_jobs();
    t.crud.deleteOnexero_integration_jobs();

    t.crud.updateManyxero_integration_jobs();
    t.crud.deleteManyxero_integration_jobs();
  },
});
