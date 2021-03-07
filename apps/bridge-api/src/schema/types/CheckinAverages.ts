import { objectType, extendType } from 'nexus';

export const CheckinAverages = objectType({
  name: 'CheckinAverages',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.product_id();
    t.model.avg_time_seconds();
  },
});

export const checkinAveragesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkinAverages();
    t.crud.checkinAverages({ filtering: true, ordering: true });

    t.field('checkinAveragesCount', {
      type: 'Int',
      args: {
        where: 'CheckinAveragesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAverages.count(args);
      },
    });
  },
});

export const checkinAveragesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCheckinAverages();
    t.crud.updateOneCheckinAverages();
    t.crud.upsertOneCheckinAverages();
    t.crud.deleteOneCheckinAverages();

    t.crud.updateManyCheckinAverages();
    t.crud.deleteManyCheckinAverages();
  },
});
