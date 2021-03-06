import { objectType, arg, extendType } from 'nexus'

export const CmAccountNote = objectType({
  name: 'CmAccountNote',
  definition(t) {
    t.model.ID()
    t.model.OwnerID()
    t.model.AccountID()
    t.model.Note()
    t.model.Status()
    t.model.CreatedDate()
    t.model.IpAddress()
  },
})

export const cmAccountNoteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmAccountNote()
    t.field('findFirstCmAccountNote', {
      type: 'CmAccountNote',
      args: {
        where: 'CmAccountNoteWhereInput',
        orderBy: arg({ type: 'CmAccountNoteOrderByInput' }),
        cursor: 'CmAccountNoteWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmAccountNote.findFirst(args as any)
      },
    })
    t.crud.cmAccountNotes({ filtering: true, ordering: true })
    t.field('cmAccountNotesCount', {
      type: 'Int',
      args: {
        where: 'CmAccountNoteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmAccountNote.count(args as any)
      },
    })
  },
})

export const cmAccountNoteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmAccountNote()
    t.crud.updateOneCmAccountNote()
    t.crud.upsertOneCmAccountNote()
    t.crud.deleteOneCmAccountNote()
    t.crud.updateManyCmAccountNote()
    t.crud.deleteManyCmAccountNote()
  },
})
