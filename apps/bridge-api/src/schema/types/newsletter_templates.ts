import { objectType, extendType } from 'nexus';

export const newsletter_templates = objectType({
  name: 'newsletter_templates',
  definition(t) {
    t.model.id();
    t.model.template_body();
    t.model.template_group();
    t.model.thumbnail();
    t.model.internal_name();
    t.model.automated_campaign();
  },
});

export const newsletter_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.newsletter_templates();
    t.crud.newsletter_templates({ filtering: true, ordering: true });
  },
});

export const newsletter_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenewsletter_templates();
    t.crud.updateOnenewsletter_templates();
    t.crud.upsertOnenewsletter_templates();
    t.crud.deleteOnenewsletter_templates();

    t.crud.updateManynewsletter_templates();
    t.crud.deleteManynewsletter_templates();
  },
});
