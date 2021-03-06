import { objectType, arg, extendType } from 'nexus'

export const AttachmentHelperLite = objectType({
  name: 'AttachmentHelperLite',
  definition(t) {
    t.model.id()
    t.model.contact_id()
    t.model.f()
    t.model.x()
    t.model.type()
  },
})

export const attachmentHelperLiteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.attachmentHelperLite()
    t.field('findFirstAttachmentHelperLite', {
      type: 'AttachmentHelperLite',
      args: {
        where: 'AttachmentHelperLiteWhereInput',
        orderBy: arg({ type: 'AttachmentHelperLiteOrderByInput' }),
        cursor: 'AttachmentHelperLiteWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.attachmentHelperLite.findFirst(args as any)
      },
    })
    t.crud.attachmentHelperLites({ filtering: true, ordering: true })
    t.field('attachmentHelperLitesCount', {
      type: 'Int',
      args: {
        where: 'AttachmentHelperLiteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.attachmentHelperLite.count(args as any)
      },
    })
  },
})

export const attachmentHelperLiteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAttachmentHelperLite()
    t.crud.updateOneAttachmentHelperLite()
    t.crud.upsertOneAttachmentHelperLite()
    t.crud.deleteOneAttachmentHelperLite()
    t.crud.updateManyAttachmentHelperLite()
    t.crud.deleteManyAttachmentHelperLite()
  },
})
