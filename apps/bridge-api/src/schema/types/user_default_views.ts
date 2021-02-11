import { objectType, extendType } from 'nexus';

export const user_default_views = objectType({
  name: 'user_default_views',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.custom_notes();
    t.model.appointments();
    t.model.default_cal_user();
  },
});

export const user_default_viewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_default_views();
    t.crud.user_default_views({ filtering: true, ordering: true });
  },
});

export const user_default_viewsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_default_views();
    t.crud.updateOneuser_default_views();
    t.crud.upsertOneuser_default_views();
    t.crud.deleteOneuser_default_views();

    t.crud.updateManyuser_default_views();
    t.crud.deleteManyuser_default_views();
  },
});
