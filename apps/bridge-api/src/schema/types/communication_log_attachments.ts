import { objectType, extendType } from 'nexus';

export const communication_log_attachments = objectType({
  name: 'communication_log_attachments',
  definition(t) {
    t.model.id();
    t.model.communication_id();
    t.model.occupier();
    t.model.contact_id();
    t.model.file_url();
  },
});

export const communication_log_attachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log_attachments();
    t.crud.communication_log_attachments({ filtering: true, ordering: true });
  },
});

export const communication_log_attachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log_attachments();
    t.crud.updateOnecommunication_log_attachments();
    t.crud.upsertOnecommunication_log_attachments();
    t.crud.deleteOnecommunication_log_attachments();

    t.crud.updateManycommunication_log_attachments();
    t.crud.deleteManycommunication_log_attachments();
  },
});
