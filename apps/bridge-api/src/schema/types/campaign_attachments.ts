import { objectType, extendType } from 'nexus';

export const campaign_attachments = objectType({
  name: 'campaign_attachments',
  definition(t) {
    t.model.id();
    t.model.campaign_id();
    t.model.occupier();
    t.model.attach_time();
    t.model.attach_user_name();
    t.model.attachment_type();
    t.model.attach_id();
  },
});

export const campaign_attachmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.campaign_attachments();
    t.crud.campaign_attachments({ filtering: true, ordering: true });
  },
});

export const campaign_attachmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecampaign_attachments();
    t.crud.updateOnecampaign_attachments();
    t.crud.upsertOnecampaign_attachments();
    t.crud.deleteOnecampaign_attachments();

    t.crud.updateManycampaign_attachments();
    t.crud.deleteManycampaign_attachments();
  },
});
