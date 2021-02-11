import { objectType, extendType } from 'nexus';

export const body_chart_templates = objectType({
  name: 'body_chart_templates',
  definition(t) {
    t.model.id();
    t.model.template_name();
    t.model.template_url();
    t.model.tags();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.chart_order();
    t.model.template_type();
  },
});

export const body_chart_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.body_chart_templates();
    t.crud.body_chart_templates({ filtering: true, ordering: true });
  },
});

export const body_chart_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebody_chart_templates();
    t.crud.updateOnebody_chart_templates();
    t.crud.upsertOnebody_chart_templates();
    t.crud.deleteOnebody_chart_templates();

    t.crud.updateManybody_chart_templates();
    t.crud.deleteManybody_chart_templates();
  },
});
