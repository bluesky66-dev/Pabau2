import { objectType, extendType } from 'nexus';

export const calendar_views = objectType({
  name: 'calendar_views',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.viewMode();
    t.model.dayViewMode();
    t.model.employeesViewMode();
    t.model.employeeGroupsViewMode();
    t.model.locationsViewMode();
    t.model.roomsViewMode();
    t.model.serviceMastersViewMode();
    t.model.serviceGroupsViewMode();
    t.model.servicesViewMode();
    t.model.appointmentSize();
    t.model.favorite_name();
    t.model.favorite_shared();
    t.model.favorite();
    t.model.favorite_id();
  },
});

export const calendar_viewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.calendar_views();
    t.crud.calendar_views({ filtering: true, ordering: true });
  },
});

export const calendar_viewsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecalendar_views();
    t.crud.updateOnecalendar_views();
    t.crud.upsertOnecalendar_views();
    t.crud.deleteOnecalendar_views();

    t.crud.updateManycalendar_views();
    t.crud.deleteManycalendar_views();
  },
});
