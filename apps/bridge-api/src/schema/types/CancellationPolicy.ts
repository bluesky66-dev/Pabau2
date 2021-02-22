import { objectType, extendType } from 'nexus';

export const CancellationPolicy = objectType({
  name: 'CancellationPolicy',
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

export const cancellationPolicyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cancellationPolicy();
    t.crud.cancellationPolicies({ filtering: true, ordering: true });

    t.field('cancellationPoliciesCount', {
      type: 'Int',
      args: {
        where: 'CancellationPolicyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cancellationPolicy.count(args);
      },
    });
  },
});

export const cancellationPolicyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCancellationPolicy();
    t.crud.updateOneCancellationPolicy();
    t.crud.upsertOneCancellationPolicy();
    t.crud.deleteOneCancellationPolicy();

    t.crud.updateManyCancellationPolicy();
    t.crud.deleteManyCancellationPolicy();
  },
});
