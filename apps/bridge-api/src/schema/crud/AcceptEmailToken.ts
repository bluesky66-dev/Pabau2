import { objectType, arg, extendType } from 'nexus'

export const AcceptEmailToken = objectType({
  name: 'AcceptEmailToken',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.email()
    t.model.token()
    t.model.company()
  },
})

export const acceptEmailTokenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.acceptEmailToken()
    t.field('findFirstAcceptEmailToken', {
      type: 'AcceptEmailToken',
      args: {
        where: 'AcceptEmailTokenWhereInput',
        orderBy: arg({ type: 'AcceptEmailTokenOrderByInput' }),
        cursor: 'AcceptEmailTokenWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acceptEmailToken.findFirst(args as any)
      },
    })
    t.crud.acceptEmailTokens({ filtering: true, ordering: true })
    t.field('acceptEmailTokensCount', {
      type: 'Int',
      args: {
        where: 'AcceptEmailTokenWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acceptEmailToken.count(args as any)
      },
    })
  },
})

export const acceptEmailTokenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAcceptEmailToken()
    t.crud.updateOneAcceptEmailToken()
    t.crud.upsertOneAcceptEmailToken()
    t.crud.deleteOneAcceptEmailToken()
    t.crud.updateManyAcceptEmailToken()
    t.crud.deleteManyAcceptEmailToken()
  },
})
