import { objectType, arg, extendType } from 'nexus'

export const CmCaseNote = objectType({
  name: 'CmCaseNote',
  definition(t) {
    t.model.ID()
    t.model.OwnerID()
    t.model.CaseID()
    t.model.Note()
    t.model.Status()
    t.model.CreatedDate()
    t.model.IpAddress()
  },
})

export const cmCaseNoteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmCaseNote()
    t.field('findFirstCmCaseNote', {
      type: 'CmCaseNote',
      args: {
        where: 'CmCaseNoteWhereInput',
        orderBy: arg({ type: 'CmCaseNoteOrderByInput' }),
        cursor: 'CmCaseNoteWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCaseNote.findFirst(args as any)
      },
    })
    t.crud.cmCaseNotes({ filtering: true, ordering: true })
    t.field('cmCaseNotesCount', {
      type: 'Int',
      args: {
        where: 'CmCaseNoteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCaseNote.count(args as any)
      },
    })
  },
})

export const cmCaseNoteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmCaseNote()
    t.crud.updateOneCmCaseNote()
    t.crud.upsertOneCmCaseNote()
    t.crud.deleteOneCmCaseNote()
    t.crud.updateManyCmCaseNote()
    t.crud.deleteManyCmCaseNote()
  },
})
