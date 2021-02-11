import { objectType, extendType } from 'nexus';

export const medical_form_contact_restore = objectType({
  name: 'medical_form_contact_restore',
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
  },
});

export const medical_form_contact_restoreQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_contact_restore();
    t.crud.medical_form_contact_restores({ filtering: true, ordering: true });
  },
});

export const medical_form_contact_restoreMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_contact_restore();
    t.crud.updateOnemedical_form_contact_restore();
    t.crud.upsertOnemedical_form_contact_restore();
    t.crud.deleteOnemedical_form_contact_restore();

    t.crud.updateManymedical_form_contact_restore();
    t.crud.deleteManymedical_form_contact_restore();
  },
});
