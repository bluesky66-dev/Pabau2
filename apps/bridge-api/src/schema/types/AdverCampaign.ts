import { objectType, extendType } from 'nexus';

export const AdverCampaign = objectType({
  name: 'AdverCampaign',
  definition(t) {
    t.model.id();
    t.model.advert_name();
    t.model.advert_type();
    t.model.campaign_budget();
    t.model.campaign_interval();
    t.model.campaign_audience();
    t.model.campaign_id();
    t.model.cid();
    t.model.attach_id();
    t.model.engagement();
    t.model.advert_reach();
    t.model.Clicks();
    t.model.start();
    t.model.end();
    t.model.url();
    t.model.attached_by();
    t.model.attach_time();
  },
});

export const adverCampaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.adverCampaign();
    t.crud.adverCampaigns({ filtering: true, ordering: true , pagination: true });

    t.field('adverCampaignsCount', {
      type: 'Int',
      args: {
        where: 'AdverCampaignWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.adverCampaign.count(args);
      },
    });
  },
});

export const adverCampaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAdverCampaign();
    t.crud.updateOneAdverCampaign();
    t.crud.upsertOneAdverCampaign();
    t.crud.deleteOneAdverCampaign();

    t.crud.updateManyAdverCampaign();
    t.crud.deleteManyAdverCampaign();
  },
});
