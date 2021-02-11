import { objectType, extendType } from 'nexus';

export const nhs_procedure_outcome = objectType({
  name: 'nhs_procedure_outcome',
  definition(t) {
    t.model.id();
    t.model.nhs_procedure_id();
    t.model.name();
    t.model.time();
    t.model.nhs_risk_adjust_id();
    t.model.definition();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.type();
  },
});

export const nhs_procedure_outcomeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_procedure_outcome();
    t.crud.nhs_procedure_outcomes({ filtering: true, ordering: true });
  },
});

export const nhs_procedure_outcomeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_procedure_outcome();
    t.crud.updateOnenhs_procedure_outcome();
    t.crud.upsertOnenhs_procedure_outcome();
    t.crud.deleteOnenhs_procedure_outcome();

    t.crud.updateManynhs_procedure_outcome();
    t.crud.deleteManynhs_procedure_outcome();
  },
});
