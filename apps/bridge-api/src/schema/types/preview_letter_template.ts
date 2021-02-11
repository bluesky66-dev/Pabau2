import { objectType, extendType } from 'nexus';

export const preview_letter_template = objectType({
  name: 'preview_letter_template',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.subject();
    t.model.message();
    t.model.header();
    t.model.footer();
    t.model.template_id();
    t.model.exclude_margins();
  },
});

export const preview_letter_templateQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.preview_letter_template();
    t.crud.preview_letter_templates({ filtering: true, ordering: true });
  },
});

export const preview_letter_templateMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepreview_letter_template();
    t.crud.updateOnepreview_letter_template();
    t.crud.upsertOnepreview_letter_template();
    t.crud.deleteOnepreview_letter_template();

    t.crud.updateManypreview_letter_template();
    t.crud.deleteManypreview_letter_template();
  },
});
