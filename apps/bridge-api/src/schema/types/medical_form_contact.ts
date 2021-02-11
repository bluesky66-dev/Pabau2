import { objectType, extendType } from 'nexus';

export const medical_form_contact = objectType({
  name: 'medical_form_contact',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.contact_id();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.complete();
    t.model.locked();
    t.model.user_created();
    t.model.user_updated();
    t.model.related_to();
    t.model.custom_user_name();
    t.model.prescriber();
    t.model.priority();
    t.model.pharmacy_id();
    t.model.form_status();
    t.model.comments();
    t.model.urgent();
    t.model.imported();
    t.model.custom_contact_name();
    t.model.custom_contact_id();
    t.model.approved_triggers();
    t.model.actioned_by();
    t.model.form_contact_number();
    t.model.diagnosis_code();
  },
});

export const medical_form_contactQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_contact();
    t.crud.medical_form_contacts({ filtering: true, ordering: true });
  },
});

export const medical_form_contactMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_contact();
    t.crud.updateOnemedical_form_contact();
    t.crud.upsertOnemedical_form_contact();
    t.crud.deleteOnemedical_form_contact();

    t.crud.updateManymedical_form_contact();
    t.crud.deleteManymedical_form_contact();
  },
});
