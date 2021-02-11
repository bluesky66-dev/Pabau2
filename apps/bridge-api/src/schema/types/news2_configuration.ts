import { objectType, extendType } from 'nexus';

export const news2_configuration = objectType({
  name: 'news2_configuration',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.medical_form_id();
    t.model.respirations();
    t.model.spo2_scale_1();
    t.model.spo2_scale_2();
    t.model.air_or_oxygen();
    t.model.blood_pressure();
    t.model.pulse();
    t.model.consciousness();
    t.model.temperature();
  },
});

export const news2_configurationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.news2_configuration();
    t.crud.news2_configurations({ filtering: true, ordering: true });
  },
});

export const news2_configurationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenews2_configuration();
    t.crud.updateOnenews2_configuration();
    t.crud.upsertOnenews2_configuration();
    t.crud.deleteOnenews2_configuration();

    t.crud.updateManynews2_configuration();
    t.crud.deleteManynews2_configuration();
  },
});
