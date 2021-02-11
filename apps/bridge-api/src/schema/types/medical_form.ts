import { objectType, extendType } from 'nexus';

export const medical_form = objectType({
  name: 'medical_form',
  definition(t) {
    t.model.id();
    t.model.user_deleted();
    t.model.name();
    t.model.data();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.nhs_procedure_id();
    t.model.locked();
    t.model.printout();
    t.model.occupier();
    t.model.user_created();
    t.model.encoded();
    t.model.form_type();
    t.model.service_id();
    t.model.ipad_only();
    t.model.heading_setting();
    t.model.temp_static();
    t.model.old_data();
    t.model.form_category();
    t.model.author();
    t.model.diagnosis_code();
    t.model.is_fav();
    t.model.diagnosis_code_enabled();
    t.model.lab_id();
    t.model.is_private();
  },
});

export const medical_formQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form();
    t.crud.medical_forms({ filtering: true, ordering: true });
  },
});

export const medical_formMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form();
    t.crud.updateOnemedical_form();
    t.crud.upsertOnemedical_form();
    t.crud.deleteOnemedical_form();

    t.crud.updateManymedical_form();
    t.crud.deleteManymedical_form();
  },
});
