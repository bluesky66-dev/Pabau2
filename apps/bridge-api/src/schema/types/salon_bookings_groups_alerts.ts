import { objectType, extendType } from 'nexus';

export const salon_bookings_groups_alerts = objectType({
  name: 'salon_bookings_groups_alerts',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.CourseID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.Critical();
  },
});

export const salon_bookings_groups_alertsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_groups_alerts();
    t.crud.salon_bookings_groups_alerts({ filtering: true, ordering: true });
  },
});

export const salon_bookings_groups_alertsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_groups_alerts();
    t.crud.updateOnesalon_bookings_groups_alerts();
    t.crud.upsertOnesalon_bookings_groups_alerts();
    t.crud.deleteOnesalon_bookings_groups_alerts();

    t.crud.updateManysalon_bookings_groups_alerts();
    t.crud.deleteManysalon_bookings_groups_alerts();
  },
});
