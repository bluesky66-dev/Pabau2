import { objectType, extendType } from 'nexus';

export const job_status = objectType({
  name: 'job_status',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.status();
    t.model.order();
  },
});

export const job_statusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.job_status();
    t.crud.job_statuses({ filtering: true, ordering: true });
  },
});

export const job_statusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnejob_status();
    t.crud.updateOnejob_status();
    t.crud.upsertOnejob_status();
    t.crud.deleteOnejob_status();

    t.crud.updateManyjob_status();
    t.crud.deleteManyjob_status();
  },
});
