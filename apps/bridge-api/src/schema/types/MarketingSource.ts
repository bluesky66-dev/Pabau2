import { objectType, extendType, nonNull, intArg, } from "nexus";
import { Context } from "../../context";

export const MarketingSource = objectType({
  name: 'MarketingSource',
  definition(t) {
    t.model.id()
    t.model.source_name({
      alias: 'name'
    })
    t.model.occupier({
      alias: 'company_id'
    })
    t.model.custom_id()
    t.model.company()
  }
})

export const MarketingSourceQuery = extendType({
  type: 'Query',
  definition(t ) {
    t.field("retrieveMarketingSource", {
      type: MarketingSource,
      args: {
        id: nonNull(intArg())
      },
      async resolve(_root, args, ctx:Context){
        return ctx.prisma.marketingSource.findFirst({
          where: {
            id: Number(args.id) ?? undefined
          }
        }).then((result) => {
          if(result === null){
            throw new Error(`No such marketing source with id of ${args.id}`)
          }
          return result
        })
      }
    })
    t.crud.marketingSources({
      alias: 'listMarketingSources',
      pagination: true,
      filtering: true,
      ordering: true
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
