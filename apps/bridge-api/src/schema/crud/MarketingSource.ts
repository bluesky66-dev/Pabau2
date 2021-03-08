import { objectType, arg, extendType } from 'nexus'

export const MarketingSource = objectType({
  name: 'MarketingSource',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.company_id()
    t.model.custom_id()
    t.model.isActive()
    t.model.imported()
    t.model.company()
  },
})

export const marketingSourceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.marketingSource()
    t.field('findFirstMarketingSource', {
      type: 'MarketingSource',
      args: {
        where: 'MarketingSourceWhereInput',
        orderBy: arg({ type: 'MarketingSourceOrderByInput' }),
        cursor: 'MarketingSourceWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.marketingSource.findFirst(args as any)
      },
    })
    t.crud.marketingSources({ filtering: true, ordering: true })
    t.field('marketingSourcesCount', {
      type: 'Int',
      args: {
        where: 'MarketingSourceWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.marketingSource.count(args as any)
      },
    })
  },
})

export const marketingSourceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneMarketingSource()
    t.crud.updateOneMarketingSource()
    t.crud.upsertOneMarketingSource()
    t.crud.deleteOneMarketingSource()
    t.crud.updateManyMarketingSource()
    t.crud.deleteManyMarketingSource()
  },
})
