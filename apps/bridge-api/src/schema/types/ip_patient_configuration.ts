import { objectType, extendType } from 'nexus';

export const ip_patient_configuration = objectType({
  name: 'ip_patient_configuration',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
    t.model.observation_form_id();
    t.model.admission_form_id();
    t.model.discharge_form_id();
    t.model.handover_form_id();
  },
});

export const ip_patient_configurationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_patient_configuration();
    t.crud.ip_patient_configurations({ filtering: true, ordering: true });
  },
});

export const ip_patient_configurationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_patient_configuration();
    t.crud.updateOneip_patient_configuration();
    t.crud.upsertOneip_patient_configuration();
    t.crud.deleteOneip_patient_configuration();

    t.crud.updateManyip_patient_configuration();
    t.crud.deleteManyip_patient_configuration();
  },
});
