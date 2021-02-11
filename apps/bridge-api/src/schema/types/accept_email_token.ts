import { objectType, extendType } from 'nexus';

export const accept_email_token = objectType({
  name: 'accept_email_token',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.email();
    t.model.token();
  },
});

export const accept_email_tokenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.accept_email_token();
    t.crud.accept_email_tokens({ filtering: true, ordering: true });
  },
});

export const accept_email_tokenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneaccept_email_token();
    t.crud.updateOneaccept_email_token();
    t.crud.upsertOneaccept_email_token();
    t.crud.deleteOneaccept_email_token();

    t.crud.updateManyaccept_email_token();
    t.crud.deleteManyaccept_email_token();
  },
});
