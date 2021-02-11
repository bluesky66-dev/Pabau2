import { objectType, extendType } from 'nexus';

export const cm_coupons = objectType({
  name: 'cm_coupons',
  definition(t) {
    t.model.id();
    t.model.coupon_title();
    t.model.coupon_details();
    t.model.coupon_image();
    t.model.coupon_start_date();
    t.model.coupon_expiry_date();
    t.model.coupon_code();
    t.model.coupon_amount();
    t.model.coupon_rate_type();
    t.model.coupon_created_date();
    t.model.company();
    t.model.created_by();
    t.model.coupon_impressions();
    t.model.coupons_sent();
    t.model.coupon_max_amount();
  },
});

export const cm_couponsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_coupons();
    t.crud.cm_coupons({ filtering: true, ordering: true });
  },
});

export const cm_couponsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_coupons();
    t.crud.updateOnecm_coupons();
    t.crud.upsertOnecm_coupons();
    t.crud.deleteOnecm_coupons();

    t.crud.updateManycm_coupons();
    t.crud.deleteManycm_coupons();
  },
});
