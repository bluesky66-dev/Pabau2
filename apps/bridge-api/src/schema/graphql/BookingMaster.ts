import { objectType, arg, extendType } from 'nexus'

export const BookingMaster = objectType({
  name: 'BookingMaster',
  definition(t) {
    t.model.id()
    t.model.class_id()
    t.model.user_id()
    t.model.booking_date()
    t.model.payment_status()
    t.model.cancel_status()
    t.model.cancel_date()
    t.model.company_id()
    t.model.class_currency()
    t.model.class_price()
    t.model.checked_in()
    t.model.payed_by()
    t.model.waiting()
  },
})

export const bookingMasterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookingMaster()
    t.field('findFirstBookingMaster', {
      type: 'BookingMaster',
      args: {
        where: 'BookingMasterWhereInput',
        orderBy: arg({ type: 'BookingMasterOrderByInput' }),
        cursor: 'BookingMasterWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookingMaster.findFirst(args as any)
      },
    })
    t.crud.bookingMasters({ filtering: true, ordering: true })
    t.field('bookingMastersCount', {
      type: 'Int',
      args: {
        where: 'BookingMasterWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookingMaster.count(args as any)
      },
    })
  },
})

export const bookingMasterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBookingMaster()
    t.crud.updateOneBookingMaster()
    t.crud.upsertOneBookingMaster()
    t.crud.deleteOneBookingMaster()
    t.crud.updateManyBookingMaster()
    t.crud.deleteManyBookingMaster()
  },
})
