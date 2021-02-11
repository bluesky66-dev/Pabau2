import { objectType, extendType } from 'nexus';

export const sms_group_log = objectType({
  name: 'sms_group_log',
  definition(t) {
    t.model.smsg_id();
    t.model.smsg_statsid();
    t.model.smsg_groupid();
  },
});

export const sms_group_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_group_log();
    t.crud.sms_group_logs({ filtering: true, ordering: true });
  },
});

export const sms_group_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_group_log();
    t.crud.updateOnesms_group_log();
    t.crud.upsertOnesms_group_log();
    t.crud.deleteOnesms_group_log();

    t.crud.updateManysms_group_log();
    t.crud.deleteManysms_group_log();
  },
});
