import { objectType, extendType } from 'nexus';

export const company_branches_attachments = objectType({
  name: 'company_branches_attachments',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.location_id();
    t.model.type();
    t.model.url();
    t.model.description();
  },
});

export const company_branches_attachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_branches_attachments();
    t.crud.company_branches_attachments({ filtering: true, ordering: true });
  },
});

export const company_branches_attachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_branches_attachments();
    t.crud.updateOnecompany_branches_attachments();
    t.crud.upsertOnecompany_branches_attachments();
    t.crud.deleteOnecompany_branches_attachments();

    t.crud.updateManycompany_branches_attachments();
    t.crud.deleteManycompany_branches_attachments();
  },
});
