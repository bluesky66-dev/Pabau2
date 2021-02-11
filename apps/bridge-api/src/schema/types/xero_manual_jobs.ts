import { objectType, extendType } from 'nexus';

export const xero_manual_jobs = objectType({
  name: 'xero_manual_jobs',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.ref_start_date();
    t.model.ref_end_date();
    t.model.start_date();
    t.model.end_date();
  },
});

export const xero_manual_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_manual_jobs();
    t.crud.xero_manual_jobs({ filtering: true, ordering: true });
  },
});

export const xero_manual_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_manual_jobs();
    t.crud.updateOnexero_manual_jobs();
    t.crud.upsertOnexero_manual_jobs();
    t.crud.deleteOnexero_manual_jobs();

    t.crud.updateManyxero_manual_jobs();
    t.crud.deleteManyxero_manual_jobs();
  },
});
