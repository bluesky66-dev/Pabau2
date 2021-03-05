import { objectType, extendType } from 'nexus';

export const MediaLlibraryAttachments = objectType({
  name: 'MediaLlibraryAttachments',
  definition(t) {
    t.model.id();
    t.model.file_url();
    t.model.company_id();
    t.model.contact_id();
    t.model.communication_id();
    t.model.medical_form_contact_id();
    t.model.contact_attachment_id();
    t.model.sales_id();
    t.model.statement_id();
    t.model.creation_date();
  },
});

export const mediaLlibraryAttachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mediaLlibraryAttachments();
    t.crud.mediaLlibraryAttachments({ filtering: true, ordering: true });

    t.field('mediaLlibraryAttachmentsCount', {
      type: 'Int',
      args: {
        where: 'MediaLlibraryAttachmentsWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.mediaLlibraryAttachments.count(args);
      },
    });
  },
});

export const mediaLlibraryAttachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneMediaLlibraryAttachments();
    t.crud.updateOneMediaLlibraryAttachments();
    t.crud.upsertOneMediaLlibraryAttachments();
    t.crud.deleteOneMediaLlibraryAttachments();

    t.crud.updateManyMediaLlibraryAttachments();
    t.crud.deleteManyMediaLlibraryAttachments();
  },
});
