import { objectType, extendType } from 'nexus';

export const nhs_patient_number = objectType({
  name: 'nhs_patient_number',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_id();
    t.model.number();
    t.model.nhs_hospital_id();
    t.model.nhs_locum_id();
  },
});

export const nhs_patient_numberQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_number();
    t.crud.nhs_patient_numbers({ filtering: true, ordering: true });
  },
});

export const nhs_patient_numberMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_number();
    t.crud.updateOnenhs_patient_number();
    t.crud.upsertOnenhs_patient_number();
    t.crud.deleteOnenhs_patient_number();

    t.crud.updateManynhs_patient_number();
    t.crud.deleteManynhs_patient_number();
  },
});
