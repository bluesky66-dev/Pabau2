import { objectType, extendType } from 'nexus';

export const System_Notifications = objectType({
  name: 'System_Notifications',
  definition(t) {
    t.model.alertid();
    t.model.cid();
    t.model.uid();
    t.model.message();
    t.model.read();
    t.model.entrydate();
    t.model.type();
    t.model.owner_id();
  },
});

export const system_NotificationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.system_Notifications();
    t.crud.system_Notifications({ filtering: true, ordering: true });
  },
});

export const system_NotificationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSystem_Notifications();
    t.crud.updateOneSystem_Notifications();
    t.crud.upsertOneSystem_Notifications();
    t.crud.deleteOneSystem_Notifications();

    t.crud.updateManySystem_Notifications();
    t.crud.deleteManySystem_Notifications();
  },
});
