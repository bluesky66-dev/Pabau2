import { objectType, extendType } from 'nexus';

export const course_taken = objectType({
  name: 'course_taken',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.date_started();
  },
});

export const course_takenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_taken();
    t.crud.course_takens({ filtering: true, ordering: true });
  },
});

export const course_takenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_taken();
    t.crud.updateOnecourse_taken();
    t.crud.upsertOnecourse_taken();
    t.crud.deleteOnecourse_taken();

    t.crud.updateManycourse_taken();
    t.crud.deleteManycourse_taken();
  },
});
