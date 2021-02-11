import { objectType, extendType } from 'nexus';

export const sms_delivery = objectType({
  name: 'sms_delivery',
  definition(t) {
    t.model.smsd_id();
    t.model.smsd_number();
    t.model.contact_id();
    t.model.smsd_status();
    t.model.smsd_cid();
    t.model.smsd_customID();
    t.model.error_code();
  },
});

export const sms_deliveryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_delivery();
    t.crud.sms_deliveries({ filtering: true, ordering: true });
  },
});

export const sms_deliveryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_delivery();
    t.crud.updateOnesms_delivery();
    t.crud.upsertOnesms_delivery();
    t.crud.deleteOnesms_delivery();

    t.crud.updateManysms_delivery();
    t.crud.deleteManysms_delivery();
  },
});
