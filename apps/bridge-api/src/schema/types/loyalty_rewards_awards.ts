import { objectType, extendType } from 'nexus';

export const loyalty_rewards_awards = objectType({
  name: 'loyalty_rewards_awards',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.reward_id();
    t.model.company_id();
    t.model.date_awarded();
  },
});

export const loyalty_rewards_awardsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_rewards_awards();
    t.crud.loyalty_rewards_awards({ filtering: true, ordering: true });
  },
});

export const loyalty_rewards_awardsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_rewards_awards();
    t.crud.updateOneloyalty_rewards_awards();
    t.crud.upsertOneloyalty_rewards_awards();
    t.crud.deleteOneloyalty_rewards_awards();

    t.crud.updateManyloyalty_rewards_awards();
    t.crud.deleteManyloyalty_rewards_awards();
  },
});
