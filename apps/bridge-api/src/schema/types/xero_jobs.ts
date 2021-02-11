import { objectType, extendType } from 'nexus';

export const xero_jobs = objectType({
  name: 'xero_jobs',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.date_created();
    t.model.sales_updated();
    t.model.result_text();
  },
});

export const xero_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_jobs();
    t.crud.xero_jobs({ filtering: true, ordering: true });
  },
});

export const xero_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_jobs();
    t.crud.updateOnexero_jobs();
    t.crud.upsertOnexero_jobs();
    t.crud.deleteOnexero_jobs();

    t.crud.updateManyxero_jobs();
    t.crud.deleteManyxero_jobs();
  },
});
