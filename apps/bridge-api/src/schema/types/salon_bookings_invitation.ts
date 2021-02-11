import { objectType, extendType } from 'nexus';

export const salon_bookings_invitation = objectType({
  name: 'salon_bookings_invitation',
  definition(t) {
    t.model.id();
    t.model.booking_id();
    t.model.guest_id();
    t.model.status();
  },
});

export const salon_bookings_invitationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_invitation();
    t.crud.salon_bookings_invitations({ filtering: true, ordering: true });
  },
});

export const salon_bookings_invitationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_invitation();
    t.crud.updateOnesalon_bookings_invitation();
    t.crud.upsertOnesalon_bookings_invitation();
    t.crud.deleteOnesalon_bookings_invitation();

    t.crud.updateManysalon_bookings_invitation();
    t.crud.deleteManysalon_bookings_invitation();
  },
});
