import { objectType, extendType } from 'nexus';

export const medical_contra = objectType({
  name: 'medical_contra',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_id();
    t.model.is_enabled();
    t.model.condition();
    t.model.created_date();
    t.model.contra_code();
    t.model.question_label();
    t.model.question_answer();
    t.model.product_id();
    t.model.services_ids();
    t.model.form_id();
    t.model.age();
    t.model.medical_condition();
    t.model.contra_title();
    t.model.alert_text();
    t.model.prevent_forward();
    t.model.custom_id();
    t.model.imported();
  },
});

export const medical_contraQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_contra();
    t.crud.medical_contras({ filtering: true, ordering: true });
  },
});

export const medical_contraMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_contra();
    t.crud.updateOnemedical_contra();
    t.crud.upsertOnemedical_contra();
    t.crud.deleteOnemedical_contra();

    t.crud.updateManymedical_contra();
    t.crud.deleteManymedical_contra();
  },
});
