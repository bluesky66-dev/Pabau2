import { objectType, extendType } from 'nexus';

export const cm_coupon_clicks = objectType({
  name: 'cm_coupon_clicks',
  definition(t) {
    t.model.id();
    t.model.coupon_id();
    t.model.click_date();
  },
});

export const cm_coupon_clicksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_coupon_clicks();
    t.crud.cm_coupon_clicks({ filtering: true, ordering: true });
  },
});

export const cm_coupon_clicksMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_coupon_clicks();
    t.crud.updateOnecm_coupon_clicks();
    t.crud.upsertOnecm_coupon_clicks();
    t.crud.deleteOnecm_coupon_clicks();

    t.crud.updateManycm_coupon_clicks();
    t.crud.deleteManycm_coupon_clicks();
  },
});
