import { objectType, extendType } from 'nexus';

export const cm_staff_evaluations = objectType({
  name: 'cm_staff_evaluations',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Date();
    t.model.Description();
    t.model.Initials();
    t.model.Comments();
  },
});

export const cm_staff_evaluationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_evaluations();
    t.crud.cm_staff_evaluations({ filtering: true, ordering: true });
  },
});

export const cm_staff_evaluationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_evaluations();
    t.crud.updateOnecm_staff_evaluations();
    t.crud.upsertOnecm_staff_evaluations();
    t.crud.deleteOnecm_staff_evaluations();

    t.crud.updateManycm_staff_evaluations();
    t.crud.deleteManycm_staff_evaluations();
  },
});
