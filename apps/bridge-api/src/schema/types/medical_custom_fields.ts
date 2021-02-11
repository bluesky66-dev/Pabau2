import { objectType, extendType } from 'nexus';

export const medical_custom_fields = objectType({
  name: 'medical_custom_fields',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.form_id();
    t.model.label();
    t.model.medical_condition();
    t.model.type();
    t.model.active();
    t.model.occupier();
  },
});

export const medical_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_custom_fields();
    t.crud.medical_custom_fields({ filtering: true, ordering: true });
  },
});

export const medical_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_custom_fields();
    t.crud.updateOnemedical_custom_fields();
    t.crud.upsertOnemedical_custom_fields();
    t.crud.deleteOnemedical_custom_fields();

    t.crud.updateManymedical_custom_fields();
    t.crud.deleteManymedical_custom_fields();
  },
});
