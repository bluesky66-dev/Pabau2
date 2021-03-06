import { objectType, arg, extendType } from 'nexus'

export const CmCampaignNote = objectType({
  name: 'CmCampaignNote',
  definition(t) {
    t.model.ID()
    t.model.OwnerID()
    t.model.BookingID()
    t.model.Note()
    t.model.Status()
    t.model.CreatedDate()
    t.model.IpAddress()
  },
})

export const cmCampaignNoteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmCampaignNote()
    t.field('findFirstCmCampaignNote', {
      type: 'CmCampaignNote',
      args: {
        where: 'CmCampaignNoteWhereInput',
        orderBy: arg({ type: 'CmCampaignNoteOrderByInput' }),
        cursor: 'CmCampaignNoteWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCampaignNote.findFirst(args as any)
      },
    })
    t.crud.cmCampaignNotes({ filtering: true, ordering: true })
    t.field('cmCampaignNotesCount', {
      type: 'Int',
      args: {
        where: 'CmCampaignNoteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCampaignNote.count(args as any)
      },
    })
  },
})

export const cmCampaignNoteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmCampaignNote()
    t.crud.updateOneCmCampaignNote()
    t.crud.upsertOneCmCampaignNote()
    t.crud.deleteOneCmCampaignNote()
    t.crud.updateManyCmCampaignNote()
    t.crud.deleteManyCmCampaignNote()
  },
})
