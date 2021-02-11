import { objectType, extendType } from 'nexus';

export const cm_opportunity = objectType({
  name: 'cm_opportunity',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.appointment_id();
    t.model.created_date();
    t.model.updated_date();
    t.model.created_by();
    t.model.status();
    t.model.pipeline_id();
    t.model.current_stage_id();
    t.model.closure_id();
  },
});

export const cm_opportunityQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_opportunity();
    t.crud.cm_opportunities({ filtering: true, ordering: true });
  },
});

export const cm_opportunityMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_opportunity();
    t.crud.updateOnecm_opportunity();
    t.crud.upsertOnecm_opportunity();
    t.crud.deleteOnecm_opportunity();

    t.crud.updateManycm_opportunity();
    t.crud.deleteManycm_opportunity();
  },
});
