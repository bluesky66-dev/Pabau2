import { objectType, extendType } from 'nexus';

export const user_tracking = objectType({
  name: 'user_tracking',
  definition(t) {
    t.model.id();
    t.model.entry_date();
    t.model.company_id();
    t.model.user_count();
    t.model.subscription_name();
  },
});

export const user_trackingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_tracking();
    t.crud.user_trackings({ filtering: true, ordering: true });
  },
});

export const user_trackingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_tracking();
    t.crud.updateOneuser_tracking();
    t.crud.upsertOneuser_tracking();
    t.crud.deleteOneuser_tracking();

    t.crud.updateManyuser_tracking();
    t.crud.deleteManyuser_tracking();
  },
});
