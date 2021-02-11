import { objectType, extendType } from 'nexus';

export const emailtemplate_attachments = objectType({
  name: 'emailtemplate_attachments',
  definition(t) {
    t.model.id();
    t.model.template_id();
    t.model.file();
  },
});

export const emailtemplate_attachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.emailtemplate_attachments();
    t.crud.emailtemplate_attachments({ filtering: true, ordering: true });
  },
});

export const emailtemplate_attachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneemailtemplate_attachments();
    t.crud.updateOneemailtemplate_attachments();
    t.crud.upsertOneemailtemplate_attachments();
    t.crud.deleteOneemailtemplate_attachments();

    t.crud.updateManyemailtemplate_attachments();
    t.crud.deleteManyemailtemplate_attachments();
  },
});
