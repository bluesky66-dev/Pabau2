import { objectType, extendType } from 'nexus';

export const course_section = objectType({
  name: 'course_section',
  definition(t) {
    t.model.id();
    t.model.section_name();
    t.model.order();
    t.model.category_id();
  },
});

export const course_sectionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_section();
    t.crud.course_sections({ filtering: true, ordering: true });
  },
});

export const course_sectionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_section();
    t.crud.updateOnecourse_section();
    t.crud.upsertOnecourse_section();
    t.crud.deleteOnecourse_section();

    t.crud.updateManycourse_section();
    t.crud.deleteManycourse_section();
  },
});
