import { objectType, extendType } from 'nexus';

export const url_tracking = objectType({
  name: 'url_tracking',
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.company_id();
    t.model.sms_campaign_id();
    t.model.hits();
  },
});

export const url_trackingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.url_tracking();
    t.crud.url_trackings({ filtering: true, ordering: true });
  },
});

export const url_trackingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneurl_tracking();
    t.crud.updateOneurl_tracking();
    t.crud.upsertOneurl_tracking();
    t.crud.deleteOneurl_tracking();

    t.crud.updateManyurl_tracking();
    t.crud.deleteManyurl_tracking();
  },
});
