import { objectType, extendType } from 'nexus';

export const nhs_patient_procedure = objectType({
  name: 'nhs_patient_procedure',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_id();
    t.model.nhs_procedure_id();
    t.model.date();
    t.model.notes();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.follow_up();
    t.model.nhs_locum_id();
  },
});

export const nhs_patient_procedureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_procedure();
    t.crud.nhs_patient_procedures({ filtering: true, ordering: true });
  },
});

export const nhs_patient_procedureMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_procedure();
    t.crud.updateOnenhs_patient_procedure();
    t.crud.upsertOnenhs_patient_procedure();
    t.crud.deleteOnenhs_patient_procedure();

    t.crud.updateManynhs_patient_procedure();
    t.crud.deleteManynhs_patient_procedure();
  },
});
