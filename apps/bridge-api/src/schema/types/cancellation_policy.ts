import { objectType, extendType } from 'nexus';

export const cancellation_policy = objectType({
  name: 'cancellation_policy',
  definition(t) {
    t.model.id();
    t.model.is_active();
    t.model.policy_type();
    t.model.policy_action();
    t.model.policy_value();
    t.model.policy_notice();
    t.model.policy_message();
    t.model.policy_override();
    t.model.payment_protection();
    t.model.advanced_cancellation_fee();
    t.model.no_show_fee();
    t.model.occupier();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const cancellation_policyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cancellation_policy();
    t.crud.cancellation_policies({ filtering: true, ordering: true });
  },
});

export const cancellation_policyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecancellation_policy();
    t.crud.updateOnecancellation_policy();
    t.crud.upsertOnecancellation_policy();
    t.crud.deleteOnecancellation_policy();

    t.crud.updateManycancellation_policy();
    t.crud.deleteManycancellation_policy();
  },
});
