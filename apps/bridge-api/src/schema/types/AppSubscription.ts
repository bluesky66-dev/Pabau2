import { objectType, extendType } from 'nexus';

export const AppSubscription = objectType({
  name: 'AppSubscription',
  definition(t) {
    t.model.id();
    t.model.key_value();
    t.model.name();
    t.model.Description();
    t.model.price();
  },
});

export const appSubscriptionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appSubscription();
    t.crud.appSubscriptions({ filtering: true, ordering: true , pagination: true });

    t.field('appSubscriptionsCount', {
      type: 'Int',
      args: {
        where: 'AppSubscriptionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscription.count(args);
      },
    });
  },
});

export const appSubscriptionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppSubscription();
    t.crud.updateOneAppSubscription();
    t.crud.upsertOneAppSubscription();
    t.crud.deleteOneAppSubscription();

    t.crud.updateManyAppSubscription();
    t.crud.deleteManyAppSubscription();
  },
});
