import { objectType, extendType } from 'nexus';

export const user_activities_likes = objectType({
  name: 'user_activities_likes',
  definition(t) {
    t.model.id();
    t.model.userid();
    t.model.actid();
    t.model.occupier();
    t.model.date();
  },
});

export const user_activities_likesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_activities_likes();
    t.crud.user_activities_likes({ filtering: true, ordering: true });
  },
});

export const user_activities_likesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_activities_likes();
    t.crud.updateOneuser_activities_likes();
    t.crud.upsertOneuser_activities_likes();
    t.crud.deleteOneuser_activities_likes();

    t.crud.updateManyuser_activities_likes();
    t.crud.deleteManyuser_activities_likes();
  },
});
