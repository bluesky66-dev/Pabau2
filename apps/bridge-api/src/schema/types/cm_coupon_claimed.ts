import { objectType, extendType } from 'nexus';

export const cm_coupon_claimed = objectType({
  name: 'cm_coupon_claimed',
  definition(t) {
    t.model.id();
    t.model.coupon_id();
    t.model.claim_date();
    t.model.claim_full_name();
    t.model.claim_email();
    t.model.active();
  },
});

export const cm_coupon_claimedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_coupon_claimed();
    t.crud.cm_coupon_claimeds({ filtering: true, ordering: true });
  },
});

export const cm_coupon_claimedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_coupon_claimed();
    t.crud.updateOnecm_coupon_claimed();
    t.crud.upsertOnecm_coupon_claimed();
    t.crud.deleteOnecm_coupon_claimed();

    t.crud.updateManycm_coupon_claimed();
    t.crud.deleteManycm_coupon_claimed();
  },
});
