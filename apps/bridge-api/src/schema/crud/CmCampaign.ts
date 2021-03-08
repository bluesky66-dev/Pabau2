import { objectType, arg, extendType } from 'nexus'

export const CmCampaign = objectType({
  name: 'CmCampaign',
  definition(t) {
    t.model.ID()
    t.model.OwnerID()
    t.model.CompaignName()
    t.model.Type()
    t.model.Status()
    t.model.StartDate()
    t.model.EndDate()
    t.model.ExpectedRevenue()
    t.model.BudgetedCost()
    t.model.ActualCost()
    t.model.ExpectedResponse()
    t.model.NumSent()
    t.model.Description()
    t.model.CreatedDate()
    t.model.IpAddress()
    t.model.company_id()
    t.model.company()
  },
})

export const cmCampaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmCampaign()
    t.field('findFirstCmCampaign', {
      type: 'CmCampaign',
      args: {
        where: 'CmCampaignWhereInput',
        orderBy: arg({ type: 'CmCampaignOrderByInput' }),
        cursor: 'CmCampaignWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCampaign.findFirst(args as any)
      },
    })
    t.crud.cmCampaigns({ filtering: true, ordering: true })
    t.field('cmCampaignsCount', {
      type: 'Int',
      args: {
        where: 'CmCampaignWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCampaign.count(args as any)
      },
    })
  },
})

export const cmCampaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmCampaign()
    t.crud.updateOneCmCampaign()
    t.crud.upsertOneCmCampaign()
    t.crud.deleteOneCmCampaign()
    t.crud.updateManyCmCampaign()
    t.crud.deleteManyCmCampaign()
  },
})
