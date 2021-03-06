import { objectType, arg, extendType } from 'nexus'

export const AcLogUrl = objectType({
  name: 'AcLogUrl',
  definition(t) {
    t.model.id()
    t.model.url()
    t.model.file()
    t.model.referer()
  },
})

export const acLogUrlQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.acLogUrl()
    t.field('findFirstAcLogUrl', {
      type: 'AcLogUrl',
      args: {
        where: 'AcLogUrlWhereInput',
        orderBy: arg({ type: 'AcLogUrlOrderByInput' }),
        cursor: 'AcLogUrlWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acLogUrl.findFirst(args as any)
      },
    })
    t.crud.acLogUrls({ filtering: true, ordering: true })
    t.field('acLogUrlsCount', {
      type: 'Int',
      args: {
        where: 'AcLogUrlWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acLogUrl.count(args as any)
      },
    })
  },
})

export const acLogUrlMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAcLogUrl()
    t.crud.updateOneAcLogUrl()
    t.crud.upsertOneAcLogUrl()
    t.crud.deleteOneAcLogUrl()
    t.crud.updateManyAcLogUrl()
    t.crud.deleteManyAcLogUrl()
  },
})
