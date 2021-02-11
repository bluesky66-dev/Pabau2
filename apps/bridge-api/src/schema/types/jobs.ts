import { objectType, extendType } from 'nexus';

export const jobs = objectType({
  name: 'jobs',
  definition(t) {
    t.model.job_id();
    t.model.create_date();
    t.model.created_by_id();
    t.model.start_date();
    t.model.closing_date();
    t.model.opening_title();
    t.model.job_location();
    t.model.what_you_do();
    t.model.is_closed();
    t.model.department();
    t.model.job_country();
    t.model.opening_job_blurb();
    t.model.employment_type();
    t.model.company_id();
    t.model.experience();
  },
});

export const jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.jobs();
    t.crud.jobs({ filtering: true, ordering: true });
  },
});

export const jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnejobs();
    t.crud.updateOnejobs();
    t.crud.upsertOnejobs();
    t.crud.deleteOnejobs();

    t.crud.updateManyjobs();
    t.crud.deleteManyjobs();
  },
});
