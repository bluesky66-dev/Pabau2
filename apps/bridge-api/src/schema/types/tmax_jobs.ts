import { objectType, extendType } from 'nexus';

export const tmax_jobs = objectType({
  name: 'tmax_jobs',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.date_added();
    t.model.slot();
    t.model.delay();
    t.model.time();
  },
});

export const tmax_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tmax_jobs();
    t.crud.tmax_jobs({ filtering: true, ordering: true });
  },
});

export const tmax_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetmax_jobs();
    t.crud.updateOnetmax_jobs();
    t.crud.upsertOnetmax_jobs();
    t.crud.deleteOnetmax_jobs();

    t.crud.updateManytmax_jobs();
    t.crud.deleteManytmax_jobs();
  },
});
