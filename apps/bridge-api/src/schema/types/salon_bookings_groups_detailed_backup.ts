import { objectType, extendType } from 'nexus';

export const salon_bookings_groups_detailed_backup = objectType({
  name: 'salon_bookings_groups_detailed_backup',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.group_id();
    t.model.booking_id();
    t.model.contact_id();
    t.model.created_date();
    t.model.custom_contact_email();
    t.model.custom_contact_name();
    t.model.custom_contact_id();
    t.model.imported();
  },
});

export const salon_bookings_groups_detailed_backupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_groups_detailed_backup();
    t.crud.salon_bookings_groups_detailed_backups({ filtering: true, ordering: true });
  },
});

export const salon_bookings_groups_detailed_backupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_groups_detailed_backup();
    t.crud.updateOnesalon_bookings_groups_detailed_backup();
    t.crud.upsertOnesalon_bookings_groups_detailed_backup();
    t.crud.deleteOnesalon_bookings_groups_detailed_backup();

    t.crud.updateManysalon_bookings_groups_detailed_backup();
    t.crud.deleteManysalon_bookings_groups_detailed_backup();
  },
});
