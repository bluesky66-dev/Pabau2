import { objectType, arg, extendType } from 'nexus'

export const CmBookingNote = objectType({
  name: 'CmBookingNote',
  definition(t) {
    t.model.ID()
    t.model.OwnerID()
    t.model.AppointmentID()
    t.model.Note()
    t.model.Status()
    t.model.CreatedDate()
    t.model.IpAddress()
  },
})

export const cmBookingNoteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmBookingNote()
    t.field('findFirstCmBookingNote', {
      type: 'CmBookingNote',
      args: {
        where: 'CmBookingNoteWhereInput',
        orderBy: arg({ type: 'CmBookingNoteOrderByInput' }),
        cursor: 'CmBookingNoteWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmBookingNote.findFirst(args as any)
      },
    })
    t.crud.cmBookingNotes({ filtering: true, ordering: true })
    t.field('cmBookingNotesCount', {
      type: 'Int',
      args: {
        where: 'CmBookingNoteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmBookingNote.count(args as any)
      },
    })
  },
})

export const cmBookingNoteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmBookingNote()
    t.crud.updateOneCmBookingNote()
    t.crud.upsertOneCmBookingNote()
    t.crud.deleteOneCmBookingNote()
    t.crud.updateManyCmBookingNote()
    t.crud.deleteManyCmBookingNote()
  },
})
