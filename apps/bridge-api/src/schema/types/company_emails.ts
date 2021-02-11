import { objectType, extendType } from 'nexus';

export const company_emails = objectType({
  name: 'company_emails',
  definition(t) {
    t.model.company_id();
    t.model.company_email();
    t.model.added_by();
    t.model.email_id();
    t.model.senders_name();
    t.model.confirmed();
    t.model.hash();
    t.model.default_email();
    t.model.enterprise_email();
    t.model.merge_tags();
  },
});

export const company_emailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_emails();
    t.crud.company_emails({ filtering: true, ordering: true });
  },
});

export const company_emailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_emails();
    t.crud.updateOnecompany_emails();
    t.crud.upsertOnecompany_emails();
    t.crud.deleteOnecompany_emails();

    t.crud.updateManycompany_emails();
    t.crud.deleteManycompany_emails();
  },
});
