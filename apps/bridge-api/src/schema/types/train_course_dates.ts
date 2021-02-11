import { objectType, extendType } from 'nexus';

export const train_course_dates = objectType({
  name: 'train_course_dates',
  definition(t) {
    t.model.id();
    t.model.course_id();
    t.model.user_id();
    t.model.company_id();
    t.model.status();
    t.model.course_date();
  },
});

export const train_course_datesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.train_course_dates();
    t.crud.train_course_dates({ filtering: true, ordering: true });
  },
});

export const train_course_datesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetrain_course_dates();
    t.crud.updateOnetrain_course_dates();
    t.crud.upsertOnetrain_course_dates();
    t.crud.deleteOnetrain_course_dates();

    t.crud.updateManytrain_course_dates();
    t.crud.deleteManytrain_course_dates();
  },
});
