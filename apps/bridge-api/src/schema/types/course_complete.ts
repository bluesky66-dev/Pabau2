import { objectType, extendType } from 'nexus';

export const course_complete = objectType({
  name: 'course_complete',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.complete_date();
    t.model.category_id();
  },
});

export const course_completeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_complete();
    t.crud.course_completes({ filtering: true, ordering: true });
  },
});

export const course_completeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_complete();
    t.crud.updateOnecourse_complete();
    t.crud.upsertOnecourse_complete();
    t.crud.deleteOnecourse_complete();

    t.crud.updateManycourse_complete();
    t.crud.deleteManycourse_complete();
  },
});
