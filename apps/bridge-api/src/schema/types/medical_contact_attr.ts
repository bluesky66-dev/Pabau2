import { objectType, extendType } from 'nexus';

export const medical_contact_attr = objectType({
  name: 'medical_contact_attr',
  definition(t) {
    t.model.id();
    t.model.attr_id();
    t.model.contact_id();
    t.model.value();
    t.model.updated_at();
    t.model.created_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.group_label();
    t.model.medical_form_contact_id();
    t.model.attachment_size();
    t.model.custom_contact_name();
    t.model.custom_contact_id();
  },
});

export const medical_contact_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_contact_attr();
    t.crud.medical_contact_attrs({ filtering: true, ordering: true });
  },
});

export const medical_contact_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_contact_attr();
    t.crud.updateOnemedical_contact_attr();
    t.crud.upsertOnemedical_contact_attr();
    t.crud.deleteOnemedical_contact_attr();

    t.crud.updateManymedical_contact_attr();
    t.crud.deleteManymedical_contact_attr();
  },
});
