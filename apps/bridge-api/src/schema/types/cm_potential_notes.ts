import { objectType, extendType } from 'nexus';

export const cm_potential_notes = objectType({
  name: 'cm_potential_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.PotentialID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_potential_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_potential_notes();
    t.crud.cm_potential_notes({ filtering: true, ordering: true });
  },
});

export const cm_potential_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_potential_notes();
    t.crud.updateOnecm_potential_notes();
    t.crud.upsertOnecm_potential_notes();
    t.crud.deleteOnecm_potential_notes();

    t.crud.updateManycm_potential_notes();
    t.crud.deleteManycm_potential_notes();
  },
});
