import { objectType, extendType } from 'nexus';

export const nws_newsletter_templates = objectType({
  name: 'nws_newsletter_templates',
  definition(t) {
    t.model.id();
    t.model.newsletter_id();
    t.model.type();
    t.model.template_id();
  },
});

export const nws_newsletter_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_newsletter_templates();
    t.crud.nws_newsletter_templates({ filtering: true, ordering: true });
  },
});

export const nws_newsletter_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_newsletter_templates();
    t.crud.updateOnenws_newsletter_templates();
    t.crud.upsertOnenws_newsletter_templates();
    t.crud.deleteOnenws_newsletter_templates();

    t.crud.updateManynws_newsletter_templates();
    t.crud.deleteManynws_newsletter_templates();
  },
});
