import { objectType, extendType, nonNull, intArg, } from "nexus";
import { Context } from "../../context";

export const MarketingSource = objectType({
  name: 'MarketingSource',
  definition(t) {
    t.model.id()
    t.model.source_name()
    t.model.occupier()
    t.model.custom_id()
    t.model.company()
    t.model.public()
    t.model.imported()
  }
})

export const MarketingSourceQuery = extendType({
  type: 'Query',
  definition(t ) {
    t.crud.marketingSource();
    t.crud.marketingSources({
      async resolve(_root, args, ctx:Context) {
        const companyId = ctx.req.get('x-company_id')
        const sources =  await ctx.prisma.marketingSource.findMany({
          where: {
            occupier: Number(companyId)
          }
        })
        if(sources.length === 0){
          throw new Error(`No marketing sources available`)
        }
        return sources
      },
      alias: 'marketingSources',
      pagination: true,
      filtering: true,
      ordering: true,
    });
  }
})

export const MarketingSourceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneMarketingSource()
    t.crud.deleteOneMarketingSource();
    t.crud.updateOneMarketingSource();
  }
})
