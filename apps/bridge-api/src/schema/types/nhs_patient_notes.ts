import { objectType, extendType } from 'nexus';

export const nhs_patient_notes = objectType({
  name: 'nhs_patient_notes',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_id();
    t.model.note();
    t.model.created_at();
    t.model.user_id();
    t.model.nhs_locum_id();
    t.model.nhs_patient_procedure_id();
    t.model.chart();
    t.model.updated_at();
  },
});

export const nhs_patient_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_notes();
    t.crud.nhs_patient_notes({ filtering: true, ordering: true });
  },
});

export const nhs_patient_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_notes();
    t.crud.updateOnenhs_patient_notes();
    t.crud.upsertOnenhs_patient_notes();
    t.crud.deleteOnenhs_patient_notes();

    t.crud.updateManynhs_patient_notes();
    t.crud.deleteManynhs_patient_notes();
  },
});
