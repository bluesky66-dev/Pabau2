import { objectType, extendType } from 'nexus';

export const cm_medical_conditions = objectType({
  name: 'cm_medical_conditions',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.custom_id();
    t.model.is_common();
  },
});

export const cm_medical_conditionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_medical_conditions();
    t.crud.cm_medical_conditions({ filtering: true, ordering: true });
  },
});

export const cm_medical_conditionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_medical_conditions();
    t.crud.updateOnecm_medical_conditions();
    t.crud.upsertOnecm_medical_conditions();
    t.crud.deleteOnecm_medical_conditions();

    t.crud.updateManycm_medical_conditions();
    t.crud.deleteManycm_medical_conditions();
  },
});
