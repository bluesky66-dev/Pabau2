import { objectType, extendType } from 'nexus';

export const train_course_bookings = objectType({
  name: 'train_course_bookings',
  definition(t) {
    t.model.id();
    t.model.course_id();
    t.model.webinar_id();
    t.model.course_date();
    t.model.trainer();
    t.model.encore();
  },
});

export const train_course_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.train_course_bookings();
    t.crud.train_course_bookings({ filtering: true, ordering: true });
  },
});

export const train_course_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetrain_course_bookings();
    t.crud.updateOnetrain_course_bookings();
    t.crud.upsertOnetrain_course_bookings();
    t.crud.deleteOnetrain_course_bookings();

    t.crud.updateManytrain_course_bookings();
    t.crud.deleteManytrain_course_bookings();
  },
});
