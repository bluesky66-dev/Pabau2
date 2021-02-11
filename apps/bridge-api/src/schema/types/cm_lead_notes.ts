import { objectType, extendType } from 'nexus';

export const cm_lead_notes = objectType({
  name: 'cm_lead_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.LeadID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_lead_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_lead_notes();
    t.crud.cm_lead_notes({ filtering: true, ordering: true });
  },
});

export const cm_lead_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_lead_notes();
    t.crud.updateOnecm_lead_notes();
    t.crud.upsertOnecm_lead_notes();
    t.crud.deleteOnecm_lead_notes();

    t.crud.updateManycm_lead_notes();
    t.crud.deleteManycm_lead_notes();
  },
});
