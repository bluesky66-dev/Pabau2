import { objectType, extendType } from 'nexus';

export const cm_staff_evaluation_cats = objectType({
  name: 'cm_staff_evaluation_cats',
  definition(t) {
    t.model.ID();
    t.model.EvalID();
    t.model.EvalCatID();
    t.model.Comments();
    t.model.Score();
  },
});

export const cm_staff_evaluation_catsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_evaluation_cats();
    t.crud.cm_staff_evaluation_cats({ filtering: true, ordering: true });
  },
});

export const cm_staff_evaluation_catsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_evaluation_cats();
    t.crud.updateOnecm_staff_evaluation_cats();
    t.crud.upsertOnecm_staff_evaluation_cats();
    t.crud.deleteOnecm_staff_evaluation_cats();

    t.crud.updateManycm_staff_evaluation_cats();
    t.crud.deleteManycm_staff_evaluation_cats();
  },
});
