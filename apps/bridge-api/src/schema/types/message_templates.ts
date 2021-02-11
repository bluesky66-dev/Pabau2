import { objectType, extendType } from 'nexus';

export const message_templates = objectType({
  name: 'message_templates',
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
    t.model.template_sub_type();
    t.model.template_sub_type_service();
    t.model.parent_id();
    t.model.header();
    t.model.footer();
    t.model.exclude_margins();
    t.model.template_group();
    t.model.subtype_letter();
    t.model.word_template();
    t.model.is_default();
    t.model.folder_id();
  },
});

export const message_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.message_templates();
    t.crud.message_templates({ filtering: true, ordering: true });
  },
});

export const message_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemessage_templates();
    t.crud.updateOnemessage_templates();
    t.crud.upsertOnemessage_templates();
    t.crud.deleteOnemessage_templates();

    t.crud.updateManymessage_templates();
    t.crud.deleteManymessage_templates();
  },
});
