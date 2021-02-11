import { objectType, extendType } from 'nexus';

export const cm_staff_notes = objectType({
  name: 'cm_staff_notes',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Dependents();
    t.model.Education();
    t.model.Hobbies();
    t.model.Training();
    t.model.Volunteer();
    t.model.Prescription();
  },
});

export const cm_staff_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_notes();
    t.crud.cm_staff_notes({ filtering: true, ordering: true });
  },
});

export const cm_staff_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_notes();
    t.crud.updateOnecm_staff_notes();
    t.crud.upsertOnecm_staff_notes();
    t.crud.deleteOnecm_staff_notes();

    t.crud.updateManycm_staff_notes();
    t.crud.deleteManycm_staff_notes();
  },
});
