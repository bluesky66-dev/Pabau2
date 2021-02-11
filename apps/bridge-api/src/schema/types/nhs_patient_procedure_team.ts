import { objectType, extendType } from 'nexus';

export const nhs_patient_procedure_team = objectType({
  name: 'nhs_patient_procedure_team',
  definition(t) {
    t.model.id();
    t.model.nhs_patient_procedure_id();
    t.model.user_id();
    t.model.name();
    t.model.nhs_locum_id();
  },
});

export const nhs_patient_procedure_teamQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_procedure_team();
    t.crud.nhs_patient_procedure_teams({ filtering: true, ordering: true });
  },
});

export const nhs_patient_procedure_teamMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_procedure_team();
    t.crud.updateOnenhs_patient_procedure_team();
    t.crud.upsertOnenhs_patient_procedure_team();
    t.crud.deleteOnenhs_patient_procedure_team();

    t.crud.updateManynhs_patient_procedure_team();
    t.crud.deleteManynhs_patient_procedure_team();
  },
});
