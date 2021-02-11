import { objectType, extendType } from 'nexus';

export const lab_test_comment = objectType({
  name: 'lab_test_comment',
  definition(t) {
    t.model.id();
    t.model.test_name();
    t.model.high_comment();
    t.model.low_comment();
    t.model.company_id();
    t.model.uid();
  },
});

export const lab_test_commentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_test_comment();
    t.crud.lab_test_comments({ filtering: true, ordering: true });
  },
});

export const lab_test_commentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_test_comment();
    t.crud.updateOnelab_test_comment();
    t.crud.upsertOnelab_test_comment();
    t.crud.deleteOnelab_test_comment();

    t.crud.updateManylab_test_comment();
    t.crud.deleteManylab_test_comment();
  },
});
