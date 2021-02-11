import { objectType, extendType } from 'nexus';

export const loyalty_rewards = objectType({
  name: 'loyalty_rewards',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.type();
    t.model.amount();
    t.model.package_id();
    t.model.repeat();
    t.model.repeat_every();
    t.model.email_template();
    t.model.sms_template();
    t.model.sms_sender();
  },
});

export const loyalty_rewardsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_rewards();
    t.crud.loyalty_rewards({ filtering: true, ordering: true });
  },
});

export const loyalty_rewardsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_rewards();
    t.crud.updateOneloyalty_rewards();
    t.crud.upsertOneloyalty_rewards();
    t.crud.deleteOneloyalty_rewards();

    t.crud.updateManyloyalty_rewards();
    t.crud.deleteManyloyalty_rewards();
  },
});
