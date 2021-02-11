import { objectType, extendType } from 'nexus';

export const salon_bookings_groups_notes = objectType({
  name: 'salon_bookings_groups_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.CourseID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const salon_bookings_groups_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_groups_notes();
    t.crud.salon_bookings_groups_notes({ filtering: true, ordering: true });
  },
});

export const salon_bookings_groups_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_groups_notes();
    t.crud.updateOnesalon_bookings_groups_notes();
    t.crud.upsertOnesalon_bookings_groups_notes();
    t.crud.deleteOnesalon_bookings_groups_notes();

    t.crud.updateManysalon_bookings_groups_notes();
    t.crud.deleteManysalon_bookings_groups_notes();
  },
});
