import { objectType, extendType } from 'nexus';

export const AttachmentHelperLite = objectType({
  name: 'AttachmentHelperLite',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.f();
    t.model.x();
    t.model.type();
  },
});

export const attachmentHelperLiteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.attachmentHelperLite();
    t.crud.attachmentHelperLites({ filtering: true, ordering: true , pagination: true });

    t.field('attachmentHelperLitesCount', {
      type: 'Int',
      args: {
        where: 'AttachmentHelperLiteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.attachmentHelperLite.count(args);
      },
    });
  },
});

export const attachmentHelperLiteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAttachmentHelperLite();
    t.crud.updateOneAttachmentHelperLite();
    t.crud.upsertOneAttachmentHelperLite();
    t.crud.deleteOneAttachmentHelperLite();

    t.crud.updateManyAttachmentHelperLite();
    t.crud.deleteManyAttachmentHelperLite();
  },
});
