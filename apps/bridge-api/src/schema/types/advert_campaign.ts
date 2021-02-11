import { objectType, extendType } from 'nexus';

export const advert_campaign = objectType({
  name: 'advert_campaign',
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

export const advert_campaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.advert_campaign();
    t.crud.advert_campaigns({ filtering: true, ordering: true });
  },
});

export const advert_campaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneadvert_campaign();
    t.crud.updateOneadvert_campaign();
    t.crud.upsertOneadvert_campaign();
    t.crud.deleteOneadvert_campaign();

    t.crud.updateManyadvert_campaign();
    t.crud.deleteManyadvert_campaign();
  },
});
