import { objectType, extendType } from 'nexus';

export const BookingStatus = objectType({
  name: 'BookingStatus',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.icon();
    t.model.icon_color();
    t.model.company_id();
    t.model.indicator();
    t.model.basic_field();
    t.model.ord();
    t.model.track_time();
  },
});

export const bookingStatusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookingStatus();
    t.crud.bookingStatuses({ filtering: true, ordering: true });

    t.field('bookingStatusesCount', {
      type: 'Int',
      args: {
        where: 'BookingStatusWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookingStatus.count(args);
      },
    });
  },
});

export const bookingStatusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBookingStatus();
    t.crud.updateOneBookingStatus();
    t.crud.upsertOneBookingStatus();
    t.crud.deleteOneBookingStatus();

    t.crud.updateManyBookingStatus();
    t.crud.deleteManyBookingStatus();
  },
});
