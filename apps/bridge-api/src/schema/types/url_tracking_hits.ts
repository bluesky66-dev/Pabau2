import { objectType, extendType } from 'nexus';

export const url_tracking_hits = objectType({
  name: 'url_tracking_hits',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.sms_campaign_id();
    t.model.mobile();
    t.model.date_time();
  },
});

export const url_tracking_hitsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.url_tracking_hits();
    t.crud.url_tracking_hits({ filtering: true, ordering: true });
  },
});

export const url_tracking_hitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneurl_tracking_hits();
    t.crud.updateOneurl_tracking_hits();
    t.crud.upsertOneurl_tracking_hits();
    t.crud.deleteOneurl_tracking_hits();

    t.crud.updateManyurl_tracking_hits();
    t.crud.deleteManyurl_tracking_hits();
  },
});
