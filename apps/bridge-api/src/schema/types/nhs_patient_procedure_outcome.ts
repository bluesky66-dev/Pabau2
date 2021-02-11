import { objectType, extendType } from 'nexus';

export const nhs_patient_procedure_outcome = objectType({
  name: 'nhs_patient_procedure_outcome',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_procedure_id();
    t.model.nhs_procedure_outcome_id();
    t.model.actual_outcome();
    t.model.predicted_outcome();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.follow_up();
    t.model.nhs_locum_id();
  },
});

export const nhs_patient_procedure_outcomeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_procedure_outcome();
    t.crud.nhs_patient_procedure_outcomes({ filtering: true, ordering: true });
  },
});

export const nhs_patient_procedure_outcomeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_procedure_outcome();
    t.crud.updateOnenhs_patient_procedure_outcome();
    t.crud.upsertOnenhs_patient_procedure_outcome();
    t.crud.deleteOnenhs_patient_procedure_outcome();

    t.crud.updateManynhs_patient_procedure_outcome();
    t.crud.deleteManynhs_patient_procedure_outcome();
  },
});
