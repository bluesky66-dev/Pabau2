import { objectType, extendType } from 'nexus';

export const message_templates_locale = objectType({
  name: 'message_templates_locale',
  definition(t) {
    t.model.template_id();
    t.model.company_id();
    t.model.template_name();
    t.model.subject();
    t.model.message();
    t.model.created_by();
    t.model.template_type();
    t.model.created_at();
    t.model.date_changed_at();
  },
});

export const message_templates_localeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.message_templates_locale();
    t.crud.message_templates_locales({ filtering: true, ordering: true });
  },
});

export const message_templates_localeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemessage_templates_locale();
    t.crud.updateOnemessage_templates_locale();
    t.crud.upsertOnemessage_templates_locale();
    t.crud.deleteOnemessage_templates_locale();

    t.crud.updateManymessage_templates_locale();
    t.crud.deleteManymessage_templates_locale();
  },
});
