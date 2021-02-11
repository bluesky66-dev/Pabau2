import { objectType, extendType } from 'nexus';

export const wait_list_notifications = objectType({
  name: 'wait_list_notifications',
  definition(t) {
    t.model.id();
    t.model.waiting_id();
    t.model.contact_id();
    t.model.course_id();
    t.model.company_id();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const wait_list_notificationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.wait_list_notifications();
    t.crud.wait_list_notifications({ filtering: true, ordering: true });
  },
});

export const wait_list_notificationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewait_list_notifications();
    t.crud.updateOnewait_list_notifications();
    t.crud.upsertOnewait_list_notifications();
    t.crud.deleteOnewait_list_notifications();

    t.crud.updateManywait_list_notifications();
    t.crud.deleteManywait_list_notifications();
  },
});
