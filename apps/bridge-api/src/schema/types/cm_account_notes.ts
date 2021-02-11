import { objectType, extendType } from 'nexus';

export const cm_account_notes = objectType({
  name: 'cm_account_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.AccountID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_account_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_account_notes();
    t.crud.cm_account_notes({ filtering: true, ordering: true });
  },
});

export const cm_account_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_account_notes();
    t.crud.updateOnecm_account_notes();
    t.crud.upsertOnecm_account_notes();
    t.crud.deleteOnecm_account_notes();

    t.crud.updateManycm_account_notes();
    t.crud.deleteManycm_account_notes();
  },
});
