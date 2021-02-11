import { objectType, extendType } from 'nexus';

export const user_alerts = objectType({
  name: 'user_alerts',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.image();
    t.model.email_template_id();
    t.model.ios_message();
    t.model.sms_message();
    t.model.pabau_message();
  },
});

export const user_alertsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_alerts();
    t.crud.user_alerts({ filtering: true, ordering: true });
  },
});

export const user_alertsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_alerts();
    t.crud.updateOneuser_alerts();
    t.crud.upsertOneuser_alerts();
    t.crud.deleteOneuser_alerts();

    t.crud.updateManyuser_alerts();
    t.crud.deleteManyuser_alerts();
  },
});
