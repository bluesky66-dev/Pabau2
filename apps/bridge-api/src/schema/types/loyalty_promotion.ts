import { objectType, extendType } from 'nexus';

export const loyalty_promotion = objectType({
  name: 'loyalty_promotion',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.promotion_type();
    t.model.start_date();
    t.model.end_date();
    t.model.points();
    t.model.campaign_id();
    t.model.is_active();
    t.model.custom_amount();
  },
});

export const loyalty_promotionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_promotion();
    t.crud.loyalty_promotions({ filtering: true, ordering: true });
  },
});

export const loyalty_promotionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_promotion();
    t.crud.updateOneloyalty_promotion();
    t.crud.upsertOneloyalty_promotion();
    t.crud.deleteOneloyalty_promotion();

    t.crud.updateManyloyalty_promotion();
    t.crud.deleteManyloyalty_promotion();
  },
});
