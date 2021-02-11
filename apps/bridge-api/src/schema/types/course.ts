import { objectType, extendType } from 'nexus';

export const course = objectType({
  name: 'course',
  definition(t) {
    t.model.id();
    t.model.course_name();
    t.model.course_description();
    t.model.section_id();
    t.model.order();
    t.model.duration();
    t.model.video_link();
    t.model.category_id();
    t.model.audio();
    t.model.coming_soon();
    t.model.created_date();
    t.model.zendesk_article();
  },
});

export const courseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course();
    t.crud.courses({ filtering: true, ordering: true });
  },
});

export const courseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse();
    t.crud.updateOnecourse();
    t.crud.upsertOnecourse();
    t.crud.deleteOnecourse();

    t.crud.updateManycourse();
    t.crud.deleteManycourse();
  },
});
