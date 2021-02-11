import { objectType, extendType } from 'nexus';

export const media_library_attachments = objectType({
  name: 'media_library_attachments',
  definition(t) {
    t.model.id();
    t.model.file_url();
    t.model.company_id();
    t.model.contact_id();
    t.model.communication_id();
    t.model.medical_form_contact_id();
    t.model.contact_attachment_id();
    t.model.sales_id();
    t.model.statement_id();
    t.model.creation_date();
  },
});

export const media_library_attachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.media_library_attachments();
    t.crud.media_library_attachments({ filtering: true, ordering: true });
  },
});

export const media_library_attachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedia_library_attachments();
    t.crud.updateOnemedia_library_attachments();
    t.crud.upsertOnemedia_library_attachments();
    t.crud.deleteOnemedia_library_attachments();

    t.crud.updateManymedia_library_attachments();
    t.crud.deleteManymedia_library_attachments();
  },
});
