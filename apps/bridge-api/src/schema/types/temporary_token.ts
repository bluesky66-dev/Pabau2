import { objectType, extendType } from 'nexus';

export const temporary_token = objectType({
  name: 'temporary_token',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.token();
    t.model.module();
    t.model.data();
    t.model.status();
  },
});

export const temporary_tokenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.temporary_token();
    t.crud.temporary_tokens({ filtering: true, ordering: true });
  },
});

export const temporary_tokenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemporary_token();
    t.crud.updateOnetemporary_token();
    t.crud.upsertOnetemporary_token();
    t.crud.deleteOnetemporary_token();

    t.crud.updateManytemporary_token();
    t.crud.deleteManytemporary_token();
  },
});
