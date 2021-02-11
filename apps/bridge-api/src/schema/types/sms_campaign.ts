import { objectType, extendType } from 'nexus';

export const sms_campaign = objectType({
  name: 'sms_campaign',
  definition(t) {
    t.model.sms_id();
    t.model.sms_campaign_name();
    t.model.create_date();
    t.model.from_name();
    t.model.content();
    t.model.company();
    t.model.list_id();
    t.model.campaign_type();
    t.model.groups_recipients();
    t.model.sent_by();
    t.model.created_by();
    t.model.groups_prerecipients();
    t.model.campaign_status();
    t.model.send_date();
    t.model.gift_voucher();
    t.model.gift_expiry();
    t.model.total_recips();
    t.model.weblink();
    t.model.campaign_cost();
    t.model.all_products_services();
    t.model.finished_date();
  },
});

export const sms_campaignQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_campaign();
    t.crud.sms_campaigns({ filtering: true, ordering: true });
  },
});

export const sms_campaignMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_campaign();
    t.crud.updateOnesms_campaign();
    t.crud.upsertOnesms_campaign();
    t.crud.deleteOnesms_campaign();

    t.crud.updateManysms_campaign();
    t.crud.deleteManysms_campaign();
  },
});
