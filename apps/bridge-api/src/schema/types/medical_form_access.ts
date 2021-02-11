import { objectType, extendType } from 'nexus';

export const medical_form_access = objectType({
  name: 'medical_form_access',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.contact_id();
    t.model.company_id();
    t.model.request_id();
    t.model.generated_code();
    t.model.expiry_date();
  },
});

export const medical_form_accessQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_access();
    t.crud.medical_form_accesses({ filtering: true, ordering: true });
  },
});

export const medical_form_accessMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_access();
    t.crud.updateOnemedical_form_access();
    t.crud.upsertOnemedical_form_access();
    t.crud.deleteOnemedical_form_access();

    t.crud.updateManymedical_form_access();
    t.crud.deleteManymedical_form_access();
  },
});
