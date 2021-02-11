import { objectType, extendType } from 'nexus';

export const nhs_patient = objectType({
  name: 'nhs_patient',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.dob();
    t.model.weight();
    t.model.created_at();
    t.model.updated_at();
    t.model.nhs_number();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.notes();
    t.model.nhs_import_id();
    t.model.user_created();
    t.model.user_updated();
  },
});

export const nhs_patientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient();
    t.crud.nhs_patients({ filtering: true, ordering: true });
  },
});

export const nhs_patientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient();
    t.crud.updateOnenhs_patient();
    t.crud.upsertOnenhs_patient();
    t.crud.deleteOnenhs_patient();

    t.crud.updateManynhs_patient();
    t.crud.deleteManynhs_patient();
  },
});
