import { objectType, extendType } from 'nexus';

export const cm_extra_patient = objectType({
  name: 'cm_extra_patient',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.nhs_number();
    t.model.gp();
    t.model.surgeon();
    t.model.occupier();
    t.model.date_of_death();
    t.model.external_clinic();
    t.model.assigned_clinic();
    t.model.treatment_group();
    t.model.assigned_diary();
    t.model.marketing_source();
    t.model.referral_source();
  },
});

export const cm_extra_patientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_extra_patient();
    t.crud.cm_extra_patients({ filtering: true, ordering: true });
  },
});

export const cm_extra_patientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_extra_patient();
    t.crud.updateOnecm_extra_patient();
    t.crud.upsertOnecm_extra_patient();
    t.crud.deleteOnecm_extra_patient();

    t.crud.updateManycm_extra_patient();
    t.crud.deleteManycm_extra_patient();
  },
});
