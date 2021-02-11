import { objectType, extendType } from 'nexus';

export const sms_inbox = objectType({
  name: 'sms_inbox',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.number();
    t.model.content();
    t.model.action();
  },
});

export const sms_inboxQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_inbox();
    t.crud.sms_inboxes({ filtering: true, ordering: true });
  },
});

export const sms_inboxMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_inbox();
    t.crud.updateOnesms_inbox();
    t.crud.upsertOnesms_inbox();
    t.crud.deleteOnesms_inbox();

    t.crud.updateManysms_inbox();
    t.crud.deleteManysms_inbox();
  },
});
