import { objectType, extendType } from 'nexus';

export const nhs_patient_record = objectType({
  name: 'nhs_patient_record',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_id();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_form_id();
    t.model.complete();
    t.model.locked();
    t.model.user_created();
    t.model.user_updated();
    t.model.related_to();
  },
});

export const nhs_patient_recordQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_record();
    t.crud.nhs_patient_records({ filtering: true, ordering: true });
  },
});

export const nhs_patient_recordMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_record();
    t.crud.updateOnenhs_patient_record();
    t.crud.upsertOnenhs_patient_record();
    t.crud.deleteOnenhs_patient_record();

    t.crud.updateManynhs_patient_record();
    t.crud.deleteManynhs_patient_record();
  },
});
