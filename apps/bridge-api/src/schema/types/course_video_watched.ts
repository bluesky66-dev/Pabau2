import { objectType, extendType } from 'nexus';

export const course_video_watched = objectType({
  name: 'course_video_watched',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.complete_date();
    t.model.video_id();
  },
});

export const course_video_watchedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_video_watched();
    t.crud.course_video_watcheds({ filtering: true, ordering: true });
  },
});

export const course_video_watchedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_video_watched();
    t.crud.updateOnecourse_video_watched();
    t.crud.upsertOnecourse_video_watched();
    t.crud.deleteOnecourse_video_watched();

    t.crud.updateManycourse_video_watched();
    t.crud.deleteManycourse_video_watched();
  },
});
