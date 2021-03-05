import { objectType, extendType } from 'nexus';

export const CmBookingNote = objectType({
  name: 'CmBookingNote',
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

export const cmBookingNoteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmBookingNote();
    t.crud.cmBookingNotes({ filtering: true, ordering: true });

    t.field('cmBookingNotesCount', {
      type: 'Int',
      args: {
        where: 'CmBookingNoteWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmBookingNote.count(args);
      },
    });
  },
});

export const cmBookingNoteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmBookingNote();
    t.crud.updateOneCmBookingNote();
    t.crud.upsertOneCmBookingNote();
    t.crud.deleteOneCmBookingNote();

    t.crud.updateManyCmBookingNote();
    t.crud.deleteManyCmBookingNote();
  },
});
