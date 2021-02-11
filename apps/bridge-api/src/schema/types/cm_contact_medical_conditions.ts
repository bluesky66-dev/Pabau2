import { objectType, extendType } from 'nexus';

export const cm_contact_medical_conditions = objectType({
  name: 'cm_contact_medical_conditions',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.medical_condition_id();
    t.model.medical_record_id();
    t.model.is_active();
  },
});

export const cm_contact_medical_conditionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contact_medical_conditions();
    t.crud.cm_contact_medical_conditions({ filtering: true, ordering: true });
  },
});

export const cm_contact_medical_conditionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contact_medical_conditions();
    t.crud.updateOnecm_contact_medical_conditions();
    t.crud.upsertOnecm_contact_medical_conditions();
    t.crud.deleteOnecm_contact_medical_conditions();

    t.crud.updateManycm_contact_medical_conditions();
    t.crud.deleteManycm_contact_medical_conditions();
  },
});
