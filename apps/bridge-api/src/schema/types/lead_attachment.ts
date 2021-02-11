import { objectType, extendType } from 'nexus';

export const lead_attachment = objectType({
  name: 'lead_attachment',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.lead_id();
    t.model.date();
    t.model.linkref();
  },
});

export const lead_attachmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_attachment();
    t.crud.lead_attachments({ filtering: true, ordering: true });
  },
});

export const lead_attachmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_attachment();
    t.crud.updateOnelead_attachment();
    t.crud.upsertOnelead_attachment();
    t.crud.deleteOnelead_attachment();

    t.crud.updateManylead_attachment();
    t.crud.deleteManylead_attachment();
  },
});
