import { objectType, arg, extendType } from 'nexus'

export const ThirdPartyAccess = objectType({
  name: 'ThirdPartyAccess',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.company_name()
    t.model.email()
    t.model.passcode()
    t.model.first_name()
    t.model.last_name()
    t.model.logo()
    t.model.access_id()
    t.model.company()
  },
})

export const thirdPartyAccessQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.thirdPartyAccess()
    t.field('findFirstThirdPartyAccess', {
      type: 'ThirdPartyAccess',
      args: {
        where: 'ThirdPartyAccessWhereInput',
        orderBy: arg({ type: 'ThirdPartyAccessOrderByInput' }),
        cursor: 'ThirdPartyAccessWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.thirdPartyAccess.findFirst(args as any)
      },
    })
    t.crud.thirdPartyAccesses({ filtering: true, ordering: true })
    t.field('thirdPartyAccessesCount', {
      type: 'Int',
      args: {
        where: 'ThirdPartyAccessWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.thirdPartyAccess.count(args as any)
      },
    })
  },
})

export const thirdPartyAccessMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneThirdPartyAccess()
    t.crud.updateOneThirdPartyAccess()
    t.crud.upsertOneThirdPartyAccess()
    t.crud.deleteOneThirdPartyAccess()
    t.crud.updateManyThirdPartyAccess()
    t.crud.deleteManyThirdPartyAccess()
  },
})
