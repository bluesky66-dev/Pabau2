import { objectType, extendType } from 'nexus';

export const form_builder_detail = objectType({
  name: 'form_builder_detail',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.form_id();
    t.model.field_name();
    t.model.field_value();
    t.model.input_id();
    t.model.entrydate();
    t.model.ref();
    t.model.ip();
    t.model.email();
  },
});

export const form_builder_detailQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.form_builder_detail();
    t.crud.form_builder_details({ filtering: true, ordering: true });
  },
});

export const form_builder_detailMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneform_builder_detail();
    t.crud.updateOneform_builder_detail();
    t.crud.upsertOneform_builder_detail();
    t.crud.deleteOneform_builder_detail();

    t.crud.updateManyform_builder_detail();
    t.crud.deleteManyform_builder_detail();
  },
});
