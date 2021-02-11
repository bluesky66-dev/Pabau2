import { objectType, extendType } from 'nexus';

export const user_detail = objectType({
  name: 'user_detail',
  definition(t) {
    t.model.userId();
    t.model.about();
  },
});

export const user_detailQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_detail();
    t.crud.user_details({ filtering: true, ordering: true });
  },
});

export const user_detailMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_detail();
    t.crud.updateOneuser_detail();
    t.crud.upsertOneuser_detail();
    t.crud.deleteOneuser_detail();

    t.crud.updateManyuser_detail();
    t.crud.deleteManyuser_detail();
  },
});
