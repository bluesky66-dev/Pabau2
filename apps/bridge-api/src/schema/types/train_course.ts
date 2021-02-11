import { objectType, extendType } from 'nexus';

export const train_course = objectType({
  name: 'train_course',
  definition(t) {
    t.model.id();
    t.model.course_name();
    t.model.course_tag();
    t.model.custom_field_id();
    t.model.duration();
    t.model.description();
    t.model.premium();
    t.model.encore();
    t.model.category();
    t.model.difficulty();
  },
});

export const train_courseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.train_course();
    t.crud.train_courses({ filtering: true, ordering: true });
  },
});

export const train_courseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetrain_course();
    t.crud.updateOnetrain_course();
    t.crud.upsertOnetrain_course();
    t.crud.deleteOnetrain_course();

    t.crud.updateManytrain_course();
    t.crud.deleteManytrain_course();
  },
});
