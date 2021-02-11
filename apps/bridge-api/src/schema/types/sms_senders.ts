import { objectType, extendType } from 'nexus';

export const sms_senders = objectType({
  name: 'sms_senders',
  definition(t) {
    t.model.smsd_id();
    t.model.smsd_name();
    t.model.smsd_cid();
    t.model.smsd_delete();
    t.model.is_default();
    t.model.merge_tags();
  },
});

export const sms_sendersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_senders();
    t.crud.sms_senders({ filtering: true, ordering: true });
  },
});

export const sms_sendersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_senders();
    t.crud.updateOnesms_senders();
    t.crud.upsertOnesms_senders();
    t.crud.deleteOnesms_senders();

    t.crud.updateManysms_senders();
    t.crud.deleteManysms_senders();
  },
});
