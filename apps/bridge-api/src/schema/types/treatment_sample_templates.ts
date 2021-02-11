import { objectType, extendType } from 'nexus';

export const treatment_sample_templates = objectType({
  name: 'treatment_sample_templates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.treatment_template_id();
    t.model.treatment_description();
    t.model.treatment_category();
    t.model.form_type();
  },
});

export const treatment_sample_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.treatment_sample_templates();
    t.crud.treatment_sample_templates({ filtering: true, ordering: true });
  },
});

export const treatment_sample_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetreatment_sample_templates();
    t.crud.updateOnetreatment_sample_templates();
    t.crud.upsertOnetreatment_sample_templates();
    t.crud.deleteOnetreatment_sample_templates();

    t.crud.updateManytreatment_sample_templates();
    t.crud.deleteManytreatment_sample_templates();
  },
});
