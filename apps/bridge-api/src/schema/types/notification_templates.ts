import { objectType, extendType } from 'nexus';

export const notification_templates = objectType({
  name: 'notification_templates',
  definition(t) {
    t.model.id();
    t.model.purchase_order_approval_email();
  },
});

export const notification_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.notification_templates();
    t.crud.notification_templates({ filtering: true, ordering: true });
  },
});

export const notification_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenotification_templates();
    t.crud.updateOnenotification_templates();
    t.crud.upsertOnenotification_templates();
    t.crud.deleteOnenotification_templates();

    t.crud.updateManynotification_templates();
    t.crud.deleteManynotification_templates();
  },
});
