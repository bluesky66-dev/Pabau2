import { objectType, extendType } from 'nexus';

export const sms_groups = objectType({
  name: 'sms_groups',
  definition(t) {
    t.model.sms_id();
    t.model.sms_uid();
    t.model.sms_group();
    t.model.sms_number();
    t.model.sms_blank();
    t.model.sms_dup();
    t.model.sms_delete();
  },
});

export const sms_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_groups();
    t.crud.sms_groups({ filtering: true, ordering: true });
  },
});

export const sms_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_groups();
    t.crud.updateOnesms_groups();
    t.crud.upsertOnesms_groups();
    t.crud.deleteOnesms_groups();

    t.crud.updateManysms_groups();
    t.crud.deleteManysms_groups();
  },
});
