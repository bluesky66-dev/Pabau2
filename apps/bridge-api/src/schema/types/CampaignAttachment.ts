import { objectType, extendType } from 'nexus';

export const CampaignAttachment = objectType({
  name: 'CampaignAttachment',
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

export const campaignAttachmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.campaignAttachment();
    t.crud.campaignAttachments({ filtering: true, ordering: true });

    t.field('campaignAttachmentsCount', {
      type: 'Int',
      args: {
        where: 'CampaignAttachmentWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.campaignAttachment.count(args);
      },
    });
  },
});

export const campaignAttachmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCampaignAttachment();
    t.crud.updateOneCampaignAttachment();
    t.crud.upsertOneCampaignAttachment();
    t.crud.deleteOneCampaignAttachment();

    t.crud.updateManyCampaignAttachment();
    t.crud.deleteManyCampaignAttachment();
  },
});
