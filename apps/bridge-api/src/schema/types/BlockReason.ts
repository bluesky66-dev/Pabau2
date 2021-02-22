import { objectType, extendType } from 'nexus';

export const BlockReason = objectType({
  name: 'BlockReason',
  definition(t) {
    t.model.id();
    t.model.reason_name();
    t.model.occupier();
    t.model.is_active();
    t.model.block_color();
    t.model.is_paid();
    t.model.default_time();
    t.model.type();
    t.model.custom_id();
  },
});

export const blockReasonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.blockReason();
    t.crud.blockReasons({ filtering: true, ordering: true });

    t.field('blockReasonsCount', {
      type: 'Int',
      args: {
        where: 'BlockReasonWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.blockReason.count(args);
      },
    });
  },
});

export const blockReasonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBlockReason();
    t.crud.updateOneBlockReason();
    t.crud.upsertOneBlockReason();
    t.crud.deleteOneBlockReason();

    t.crud.updateManyBlockReason();
    t.crud.deleteManyBlockReason();
  },
});
