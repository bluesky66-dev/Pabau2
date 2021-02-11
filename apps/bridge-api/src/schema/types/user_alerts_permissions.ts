import { objectType, extendType } from 'nexus';

export const user_alerts_permissions = objectType({
  name: 'user_alerts_permissions',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.alert_id();
    t.model.company_id();
    t.model.ios_notification();
    t.model.email_notification();
    t.model.sms_notification();
    t.model.pabau_notification();
  },
});

export const user_alerts_permissionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_alerts_permissions();
    t.crud.user_alerts_permissions({ filtering: true, ordering: true });
  },
});

export const user_alerts_permissionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_alerts_permissions();
    t.crud.updateOneuser_alerts_permissions();
    t.crud.upsertOneuser_alerts_permissions();
    t.crud.deleteOneuser_alerts_permissions();

    t.crud.updateManyuser_alerts_permissions();
    t.crud.deleteManyuser_alerts_permissions();
  },
});
