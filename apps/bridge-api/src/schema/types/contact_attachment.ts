import { objectType, extendType } from 'nexus';

export const contact_attachment = objectType({
  name: 'contact_attachment',
  definition(t) {
    t.model.id();
    t.model.linkref();
    t.model.contact_id();
    t.model.company_id();
    t.model.date();
    t.model.attach_name();
    t.model.user_id();
    t.model.attachment_type();
    t.model.connect_public();
    t.model.website_public();
    t.model.attachment_title();
    t.model.cloud();
    t.model.custom_id();
    t.model.original_path();
    t.model.imported();
    t.model.booking_id();
    t.model.photo_type();
    t.model.attachment_size();
    t.model.broken();
    t.model.broken_check();
    t.model.old_linkref();
    t.model.in_folder();
    t.model.custom_contact_id();
    t.model.album_id();
    t.model.medical_form_id();
    t.model.tags();
    t.model.medical_uniqid();
  },
});

export const contact_attachmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_attachment();
    t.crud.contact_attachments({ filtering: true, ordering: true });
  },
});

export const contact_attachmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_attachment();
    t.crud.updateOnecontact_attachment();
    t.crud.upsertOnecontact_attachment();
    t.crud.deleteOnecontact_attachment();

    t.crud.updateManycontact_attachment();
    t.crud.deleteManycontact_attachment();
  },
});
