import { objectType, extendType } from 'nexus';

export const loyalty_campaign = objectType({
  name: 'loyalty_campaign',
  definition(t) {
    t.model.id();
    t.model.campaign_name();
    t.model.company_id();
    t.model.type();
  },
});

export const loyalty_campaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_campaign();
    t.crud.loyalty_campaigns({ filtering: true, ordering: true });
  },
});

export const loyalty_campaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_campaign();
    t.crud.updateOneloyalty_campaign();
    t.crud.upsertOneloyalty_campaign();
    t.crud.deleteOneloyalty_campaign();

    t.crud.updateManyloyalty_campaign();
    t.crud.deleteManyloyalty_campaign();
  },
});
