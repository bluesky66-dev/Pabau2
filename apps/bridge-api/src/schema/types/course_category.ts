import { objectType, extendType } from 'nexus';

export const course_category = objectType({
  name: 'course_category',
  definition(t) {
    t.model.id();
    t.model.category_name();
    t.model.order();
    t.model.description();
    t.model.hidden();
    t.model.course_goal();
    t.model.coming_soon();
    t.model.pre_cat();
    t.model.category_section();
  },
});

export const course_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_category();
    t.crud.course_categories({ filtering: true, ordering: true });
  },
});

export const course_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_category();
    t.crud.updateOnecourse_category();
    t.crud.upsertOnecourse_category();
    t.crud.deleteOnecourse_category();

    t.crud.updateManycourse_category();
    t.crud.deleteManycourse_category();
  },
});
