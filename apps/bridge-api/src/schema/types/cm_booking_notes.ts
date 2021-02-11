import { objectType, extendType } from 'nexus';

export const cm_booking_notes = objectType({
  name: 'cm_booking_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.AppointmentID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_booking_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_booking_notes();
    t.crud.cm_booking_notes({ filtering: true, ordering: true });
  },
});

export const cm_booking_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_booking_notes();
    t.crud.updateOnecm_booking_notes();
    t.crud.upsertOnecm_booking_notes();
    t.crud.deleteOnecm_booking_notes();

    t.crud.updateManycm_booking_notes();
    t.crud.deleteManycm_booking_notes();
  },
});
