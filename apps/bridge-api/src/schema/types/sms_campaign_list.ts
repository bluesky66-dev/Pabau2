import { objectType, extendType } from 'nexus';

export const sms_campaign_list = objectType({
  name: 'sms_campaign_list',
  definition(t) {
    t.model.id();
    t.model.sms_campaign_id();
    t.model.sms_group_id();
    t.model.occupier();
    t.model.mobile_number();
    t.model.contact_id();
    t.model.communication_log_id();
  },
});

export const sms_campaign_listQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_campaign_list();
    t.crud.sms_campaign_lists({ filtering: true, ordering: true });
  },
});

export const sms_campaign_listMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_campaign_list();
    t.crud.updateOnesms_campaign_list();
    t.crud.upsertOnesms_campaign_list();
    t.crud.deleteOnesms_campaign_list();

    t.crud.updateManysms_campaign_list();
    t.crud.deleteManysms_campaign_list();
  },
});
