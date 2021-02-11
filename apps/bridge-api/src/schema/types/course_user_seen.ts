import { objectType, extendType } from 'nexus';

export const course_user_seen = objectType({
  name: 'course_user_seen',
  definition(t) {
    t.model.id();
    t.model.date_seen();
    t.model.uid();
    t.model.company_id();
    t.model.vid();
    t.model.cid();
  },
});

export const course_user_seenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.course_user_seen();
    t.crud.course_user_seens({ filtering: true, ordering: true });
  },
});

export const course_user_seenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecourse_user_seen();
    t.crud.updateOnecourse_user_seen();
    t.crud.upsertOnecourse_user_seen();
    t.crud.deleteOnecourse_user_seen();

    t.crud.updateManycourse_user_seen();
    t.crud.deleteManycourse_user_seen();
  },
});
