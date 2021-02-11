import { objectType, extendType } from 'nexus';

export const cm_contact_notes = objectType({
  name: 'cm_contact_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.ContactID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.imported();
  },
});

export const cm_contact_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contact_notes();
    t.crud.cm_contact_notes({ filtering: true, ordering: true });
  },
});

export const cm_contact_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contact_notes();
    t.crud.updateOnecm_contact_notes();
    t.crud.upsertOnecm_contact_notes();
    t.crud.deleteOnecm_contact_notes();

    t.crud.updateManycm_contact_notes();
    t.crud.deleteManycm_contact_notes();
  },
});
