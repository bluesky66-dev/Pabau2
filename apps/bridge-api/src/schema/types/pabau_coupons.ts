import { objectType, extendType } from 'nexus';

export const pabau_coupons = objectType({
  name: 'pabau_coupons',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.amount();
    t.model.type();
    t.model.redeemed();
    t.model.redeem_date();
    t.model.produced_by();
  },
});

export const pabau_couponsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_coupons();
    t.crud.pabau_coupons({ filtering: true, ordering: true });
  },
});

export const pabau_couponsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_coupons();
    t.crud.updateOnepabau_coupons();
    t.crud.upsertOnepabau_coupons();
    t.crud.deleteOnepabau_coupons();

    t.crud.updateManypabau_coupons();
    t.crud.deleteManypabau_coupons();
  },
});
