import { objectType, extendType } from 'nexus';

export const job_openings = objectType({
  name: 'job_openings',
  definition(t) {
    t.model.openingid();
    t.model.opening_title();
    t.model.hiring_manager();
    t.model.start_date();
    t.model.end_date();
    t.model.status();
    t.model.published();
    t.model.occupier();
    t.model.description();
    t.model.attached_forms();
    t.model.created_date();
  },
});

export const job_openingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.job_openings();
    t.crud.job_openings({ filtering: true, ordering: true });
  },
});

export const job_openingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnejob_openings();
    t.crud.updateOnejob_openings();
    t.crud.upsertOnejob_openings();
    t.crud.deleteOnejob_openings();

    t.crud.updateManyjob_openings();
    t.crud.deleteManyjob_openings();
  },
});
