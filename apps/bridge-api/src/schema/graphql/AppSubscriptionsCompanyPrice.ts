import { objectType, arg, extendType } from 'nexus'

export const AppSubscriptionsCompanyPrice = objectType({
  name: 'AppSubscriptionsCompanyPrice',
  definition(t) {
    t.model.id()
    t.model.occupier()
    t.model.app_key_value()
    t.model.price()
  },
})

export const appSubscriptionsCompanyPriceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appSubscriptionsCompanyPrice()
    t.field('findFirstAppSubscriptionsCompanyPrice', {
      type: 'AppSubscriptionsCompanyPrice',
      args: {
        where: 'AppSubscriptionsCompanyPriceWhereInput',
        orderBy: arg({ type: 'AppSubscriptionsCompanyPriceOrderByInput' }),
        cursor: 'AppSubscriptionsCompanyPriceWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscriptionsCompanyPrice.findFirst(args as any)
      },
    })
    t.crud.appSubscriptionsCompanyPrices({ filtering: true, ordering: true })
    t.field('appSubscriptionsCompanyPricesCount', {
      type: 'Int',
      args: {
        where: 'AppSubscriptionsCompanyPriceWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscriptionsCompanyPrice.count(args as any)
      },
    })
  },
})

export const appSubscriptionsCompanyPriceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppSubscriptionsCompanyPrice()
    t.crud.updateOneAppSubscriptionsCompanyPrice()
    t.crud.upsertOneAppSubscriptionsCompanyPrice()
    t.crud.deleteOneAppSubscriptionsCompanyPrice()
    t.crud.updateManyAppSubscriptionsCompanyPrice()
    t.crud.deleteManyAppSubscriptionsCompanyPrice()
  },
})
