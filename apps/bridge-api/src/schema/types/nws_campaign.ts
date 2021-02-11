import { objectType, extendType } from 'nexus';

export const nws_campaign = objectType({
  name: 'nws_campaign',
  definition(t) {
    t.model.campaign_id();
    t.model.campaign_name();
    t.model.create_date();
    t.model.company();
  },
});

export const nws_campaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_campaign();
    t.crud.nws_campaigns({ filtering: true, ordering: true });
  },
});

export const nws_campaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_campaign();
    t.crud.updateOnenws_campaign();
    t.crud.upsertOnenws_campaign();
    t.crud.deleteOnenws_campaign();

    t.crud.updateManynws_campaign();
    t.crud.deleteManynws_campaign();
  },
});
