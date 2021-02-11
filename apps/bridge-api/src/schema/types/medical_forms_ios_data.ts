import { objectType, extendType } from 'nexus';

export const medical_forms_ios_data = objectType({
  name: 'medical_forms_ios_data',
  definition(t) {
    t.model.id();
    t.model.ref_id();
    t.model.company_id();
    t.model.form_id();
    t.model.ref_name();
    t.model.data();
  },
});

export const medical_forms_ios_dataQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_forms_ios_data();
    t.crud.medical_forms_ios_data({ filtering: true, ordering: true });
  },
});

export const medical_forms_ios_dataMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_forms_ios_data();
    t.crud.updateOnemedical_forms_ios_data();
    t.crud.upsertOnemedical_forms_ios_data();
    t.crud.deleteOnemedical_forms_ios_data();

    t.crud.updateManymedical_forms_ios_data();
    t.crud.deleteManymedical_forms_ios_data();
  },
});
