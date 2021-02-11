import { objectType, extendType } from 'nexus';

export const cm_case_notes = objectType({
  name: 'cm_case_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.CaseID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_case_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_case_notes();
    t.crud.cm_case_notes({ filtering: true, ordering: true });
  },
});

export const cm_case_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_case_notes();
    t.crud.updateOnecm_case_notes();
    t.crud.upsertOnecm_case_notes();
    t.crud.deleteOnecm_case_notes();

    t.crud.updateManycm_case_notes();
    t.crud.deleteManycm_case_notes();
  },
});
