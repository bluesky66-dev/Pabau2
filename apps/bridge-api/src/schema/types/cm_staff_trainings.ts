import { objectType, extendType } from 'nexus';

export const cm_staff_trainings = objectType({
  name: 'cm_staff_trainings',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Title();
    t.model.Category();
    t.model.Type();
    t.model.StartDate();
    t.model.EndDate();
    t.model.Hours();
    t.model.Cost();
    t.model.Note();
    t.model.Agency();
    t.model.Location();
  },
});

export const cm_staff_trainingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_trainings();
    t.crud.cm_staff_trainings({ filtering: true, ordering: true });
  },
});

export const cm_staff_trainingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_trainings();
    t.crud.updateOnecm_staff_trainings();
    t.crud.upsertOnecm_staff_trainings();
    t.crud.deleteOnecm_staff_trainings();

    t.crud.updateManycm_staff_trainings();
    t.crud.deleteManycm_staff_trainings();
  },
});
