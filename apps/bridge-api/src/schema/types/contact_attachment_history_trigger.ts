import { objectType, extendType } from 'nexus';

export const contact_attachment_history_trigger = objectType({
  name: 'contact_attachment_history_trigger',
  definition(t) {
    t.model.id();
    t.model.mode();
    t.model.contact_attachment_id();
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
    t.model.date_changed();
  },
});

export const contact_attachment_history_triggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_attachment_history_trigger();
    t.crud.contact_attachment_history_triggers({ filtering: true, ordering: true });
  },
});

export const contact_attachment_history_triggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_attachment_history_trigger();
    t.crud.updateOnecontact_attachment_history_trigger();
    t.crud.upsertOnecontact_attachment_history_trigger();
    t.crud.deleteOnecontact_attachment_history_trigger();

    t.crud.updateManycontact_attachment_history_trigger();
    t.crud.deleteManycontact_attachment_history_trigger();
  },
});
