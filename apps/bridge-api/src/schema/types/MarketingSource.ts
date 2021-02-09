import { objectType, extendType, idArg, } from "nexus";
import { Context } from "../../context";

const  companyId = 8901

export const MarketingSource = objectType({
  name: 'MarketingSource',
  definition(t) {
    t.model.id()
    t.model.source_name()
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
    t.field("MarketingSource", {
      type: MarketingSource,
      args: {
        id: idArg()
      },
      resolve(_root,args, ctx:Context){
        return ctx.prisma.marketingSource.findFirst({
          where: {
            occupier: companyId
          }
        })
      }
    })
    t.crud.marketingSources({
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
