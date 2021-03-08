import { objectType, arg, extendType } from 'nexus'

export const AdvertCampaign = objectType({
  name: 'AdvertCampaign',
  definition(t) {
    t.model.id()
    t.model.advert_name()
    t.model.advert_type()
    t.model.campaign_budget()
    t.model.campaign_interval()
    t.model.campaign_audience()
    t.model.campaign_id()
    t.model.cid()
    t.model.attach_id()
    t.model.engagement()
    t.model.advert_reach()
    t.model.Clicks()
    t.model.start()
    t.model.end()
    t.model.url()
    t.model.attached_by()
    t.model.attach_time()
  },
})

export const advertCampaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.advertCampaign()
    t.field('findFirstAdvertCampaign', {
      type: 'AdvertCampaign',
      args: {
        where: 'AdvertCampaignWhereInput',
        orderBy: arg({ type: 'AdvertCampaignOrderByInput' }),
        cursor: 'AdvertCampaignWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.advertCampaign.findFirst(args as any)
      },
    })
    t.crud.advertCampaigns({ filtering: true, ordering: true })
    t.field('advertCampaignsCount', {
      type: 'Int',
      args: {
        where: 'AdvertCampaignWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.advertCampaign.count(args as any)
      },
    })
  },
})

export const advertCampaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAdvertCampaign()
    t.crud.updateOneAdvertCampaign()
    t.crud.upsertOneAdvertCampaign()
    t.crud.deleteOneAdvertCampaign()
    t.crud.updateManyAdvertCampaign()
    t.crud.deleteManyAdvertCampaign()
  },
})
