import { objectType, arg, extendType } from 'nexus'

export const CalendarView = objectType({
  name: 'CalendarView',
  definition(t) {
    t.model.id()
    t.model.occupier()
    t.model.user_id()
    t.model.viewMode()
    t.model.dayViewMode()
    t.model.employeesViewMode()
    t.model.employeeGroupsViewMode()
    t.model.locationsViewMode()
    t.model.roomsViewMode()
    t.model.serviceMastersViewMode()
    t.model.serviceGroupsViewMode()
    t.model.servicesViewMode()
    t.model.appointmentSize()
    t.model.favorite_name()
    t.model.favorite_shared()
    t.model.favorite()
    t.model.favorite_id()
  },
})

export const calendarViewQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.calendarView()
    t.field('findFirstCalendarView', {
      type: 'CalendarView',
      args: {
        where: 'CalendarViewWhereInput',
        orderBy: arg({ type: 'CalendarViewOrderByInput' }),
        cursor: 'CalendarViewWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.calendarView.findFirst(args as any)
      },
    })
    t.crud.calendarViews({ filtering: true, ordering: true })
    t.field('calendarViewsCount', {
      type: 'Int',
      args: {
        where: 'CalendarViewWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.calendarView.count(args as any)
      },
    })
  },
})

export const calendarViewMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCalendarView()
    t.crud.updateOneCalendarView()
    t.crud.upsertOneCalendarView()
    t.crud.deleteOneCalendarView()
    t.crud.updateManyCalendarView()
    t.crud.deleteManyCalendarView()
  },
})
