import { objectType, extendType } from 'nexus';

export const sms_groups_list = objectType({
  name: 'sms_groups_list',
  definition(t) {
    t.model.id();
    t.model.sms_group_id();
    t.model.occupier();
    t.model.mobile_number();
    t.model.contact_id();
  },
});

export const sms_groups_listQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_groups_list();
    t.crud.sms_groups_lists({ filtering: true, ordering: true });
  },
});

export const sms_groups_listMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_groups_list();
    t.crud.updateOnesms_groups_list();
    t.crud.upsertOnesms_groups_list();
    t.crud.deleteOnesms_groups_list();

    t.crud.updateManysms_groups_list();
    t.crud.deleteManysms_groups_list();
  },
});
