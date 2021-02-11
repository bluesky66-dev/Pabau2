import { objectType, extendType } from 'nexus';

export const job_configuration = objectType({
  name: 'job_configuration',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.about_us();
    t.model.color_scheme();
    t.model.opening_blurb();
    t.model.page_title();
    t.model.first_name();
    t.model.last_name();
    t.model.email();
    t.model.dob();
    t.model.phone();
    t.model.address();
    t.model.city();
    t.model.postal();
    t.model.country();
    t.model.cover_letter();
    t.model.resume();
    t.model.date_available();
    t.model.linkedin();
    t.model.reference();
    t.model.how_did_hear();
    t.model.who_referred();
    t.model.default_reply();
  },
});

export const job_configurationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.job_configuration();
    t.crud.job_configurations({ filtering: true, ordering: true });
  },
});

export const job_configurationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnejob_configuration();
    t.crud.updateOnejob_configuration();
    t.crud.upsertOnejob_configuration();
    t.crud.deleteOnejob_configuration();

    t.crud.updateManyjob_configuration();
    t.crud.deleteManyjob_configuration();
  },
});
