import { objectType, extendType } from 'nexus';

export const nws_campaign_member = objectType({
  name: 'nws_campaign_member',
  definition(t) {
    t.model.id();
    t.model.campaign_id();
    t.model.member_id();
    t.model.current_newsletter_id();
    t.model.join_time();
    t.model.company();
  },
});

export const nws_campaign_memberQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_campaign_member();
    t.crud.nws_campaign_members({ filtering: true, ordering: true });
  },
});

export const nws_campaign_memberMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_campaign_member();
    t.crud.updateOnenws_campaign_member();
    t.crud.upsertOnenws_campaign_member();
    t.crud.deleteOnenws_campaign_member();

    t.crud.updateManynws_campaign_member();
    t.crud.deleteManynws_campaign_member();
  },
});
