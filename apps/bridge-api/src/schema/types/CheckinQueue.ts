import { objectType, extendType } from 'nexus';

export const CheckinQueue = objectType({
  name: 'CheckinQueue',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.been_before();
    t.model.date_start();
    t.model.accepted();
    t.model.is_lunch();
    t.model.name();
    t.model.date_accepted();
    t.model.date_end();
    t.model.was_anyone();
    t.model.finalise();
    t.model.sms_number();
    t.model.sms_sent();
    t.model.sms_wanted();
    t.model.skips();
    t.model.connect_id();
    t.model.order();
    t.model.spotify_uri();
    t.model.date_binned();
  },
});

export const checkinQueueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkinQueue();
    t.crud.checkinQueues({ filtering: true, ordering: true });

    t.field('checkinQueuesCount', {
      type: 'Int',
      args: {
        where: 'CheckinQueueWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinQueue.count(args);
      },
    });
  },
});

export const checkinQueueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCheckinQueue();
    t.crud.updateOneCheckinQueue();
    t.crud.upsertOneCheckinQueue();
    t.crud.deleteOneCheckinQueue();

    t.crud.updateManyCheckinQueue();
    t.crud.deleteManyCheckinQueue();
  },
});
