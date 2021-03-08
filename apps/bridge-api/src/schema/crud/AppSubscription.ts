import { objectType, arg, extendType } from 'nexus'

export const AppSubscription = objectType({
  name: 'AppSubscription',
  definition(t) {
    t.model.id()
    t.model.key_value()
    t.model.name()
    t.model.Description()
    t.model.price()
  },
})

export const appSubscriptionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appSubscription()
    t.field('findFirstAppSubscription', {
      type: 'AppSubscription',
      args: {
        where: 'AppSubscriptionWhereInput',
        orderBy: arg({ type: 'AppSubscriptionOrderByInput' }),
        cursor: 'AppSubscriptionWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscription.findFirst(args as any)
      },
    })
    t.crud.appSubscriptions({ filtering: true, ordering: true })
    t.field('appSubscriptionsCount', {
      type: 'Int',
      args: {
        where: 'AppSubscriptionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscription.count(args as any)
      },
    })
  },
})

export const appSubscriptionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppSubscription()
    t.crud.updateOneAppSubscription()
    t.crud.upsertOneAppSubscription()
    t.crud.deleteOneAppSubscription()
    t.crud.updateManyAppSubscription()
    t.crud.deleteManyAppSubscription()
  },
})
