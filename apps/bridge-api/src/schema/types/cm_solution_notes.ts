import { objectType, extendType } from 'nexus';

export const cm_solution_notes = objectType({
  name: 'cm_solution_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.SolutionID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_solution_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_solution_notes();
    t.crud.cm_solution_notes({ filtering: true, ordering: true });
  },
});

export const cm_solution_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_solution_notes();
    t.crud.updateOnecm_solution_notes();
    t.crud.upsertOnecm_solution_notes();
    t.crud.deleteOnecm_solution_notes();

    t.crud.updateManycm_solution_notes();
    t.crud.deleteManycm_solution_notes();
  },
});
