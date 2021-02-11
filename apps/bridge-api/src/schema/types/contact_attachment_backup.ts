import { objectType, extendType } from 'nexus';

export const contact_attachment_backup = objectType({
  name: 'contact_attachment_backup',
  definition(t) {
    t.model.id();
    t.model.linkref();
    t.model.contact_id();
    t.model.company_id();
    t.model.date();
    t.model.attach_name();
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
    t.model.added();
  },
});

export const contact_attachment_backupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_attachment_backup();
    t.crud.contact_attachment_backups({ filtering: true, ordering: true });
  },
});

export const contact_attachment_backupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_attachment_backup();
    t.crud.updateOnecontact_attachment_backup();
    t.crud.upsertOnecontact_attachment_backup();
    t.crud.deleteOnecontact_attachment_backup();

    t.crud.updateManycontact_attachment_backup();
    t.crud.deleteManycontact_attachment_backup();
  },
});
