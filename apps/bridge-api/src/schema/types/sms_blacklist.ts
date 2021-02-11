import { objectType, extendType } from 'nexus';

export const sms_blacklist = objectType({
  name: 'sms_blacklist',
  definition(t) {
    t.model.sms_id();
    t.model.sms_number();
    t.model.sms_action();
    t.model.notify_company();
  },
});

export const sms_blacklistQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_blacklist();
    t.crud.sms_blacklists({ filtering: true, ordering: true });
  },
});

export const sms_blacklistMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_blacklist();
    t.crud.updateOnesms_blacklist();
    t.crud.upsertOnesms_blacklist();
    t.crud.deleteOnesms_blacklist();

    t.crud.updateManysms_blacklist();
    t.crud.deleteManysms_blacklist();
  },
});
