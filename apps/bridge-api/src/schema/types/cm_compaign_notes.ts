import { objectType, extendType } from 'nexus';

export const cm_compaign_notes = objectType({
  name: 'cm_compaign_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.BookingID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_compaign_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_compaign_notes();
    t.crud.cm_compaign_notes({ filtering: true, ordering: true });
  },
});

export const cm_compaign_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_compaign_notes();
    t.crud.updateOnecm_compaign_notes();
    t.crud.upsertOnecm_compaign_notes();
    t.crud.deleteOnecm_compaign_notes();

    t.crud.updateManycm_compaign_notes();
    t.crud.deleteManycm_compaign_notes();
  },
});
