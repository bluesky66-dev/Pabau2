import { objectType, extendType } from 'nexus';

export const template_sample_templates = objectType({
  name: 'template_sample_templates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.template_id();
    t.model.treatment_description();
    t.model.treatment_category();
    t.model.form_type();
  },
});

export const template_sample_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.template_sample_templates();
    t.crud.template_sample_templates({ filtering: true, ordering: true });
  },
});

export const template_sample_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemplate_sample_templates();
    t.crud.updateOnetemplate_sample_templates();
    t.crud.upsertOnetemplate_sample_templates();
    t.crud.deleteOnetemplate_sample_templates();

    t.crud.updateManytemplate_sample_templates();
    t.crud.deleteManytemplate_sample_templates();
  },
});
