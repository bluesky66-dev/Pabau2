import { objectType, extendType } from 'nexus';

export const nws_campaign_newsletter = objectType({
  name: 'nws_campaign_newsletter',
  definition(t) {
    t.model.id();
    t.model.campaign_id();
    t.model.newsletter_id();
    t.model.send_time();
    t.model.company();
  },
});

export const nws_campaign_newsletterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_campaign_newsletter();
    t.crud.nws_campaign_newsletters({ filtering: true, ordering: true });
  },
});

export const nws_campaign_newsletterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_campaign_newsletter();
    t.crud.updateOnenws_campaign_newsletter();
    t.crud.upsertOnenws_campaign_newsletter();
    t.crud.deleteOnenws_campaign_newsletter();

    t.crud.updateManynws_campaign_newsletter();
    t.crud.deleteManynws_campaign_newsletter();
  },
});
