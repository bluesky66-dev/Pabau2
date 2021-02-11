import { objectType, extendType } from 'nexus';

export const follow_notif = objectType({
  name: 'follow_notif',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.campaign_id();
    t.model.type();
    t.model.follow_date();
  },
});

export const follow_notifQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.follow_notif();
    t.crud.follow_notifs({ filtering: true, ordering: true });
  },
});

export const follow_notifMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefollow_notif();
    t.crud.updateOnefollow_notif();
    t.crud.upsertOnefollow_notif();
    t.crud.deleteOnefollow_notif();

    t.crud.updateManyfollow_notif();
    t.crud.deleteManyfollow_notif();
  },
});
