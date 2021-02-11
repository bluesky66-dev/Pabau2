import { objectType, extendType } from 'nexus';

export const sms_campaign_products = objectType({
  name: 'sms_campaign_products',
  definition(t) {
    t.model.id();
    t.model.sms_campaign_id();
    t.model.product_id();
    t.model.related_type();
    t.model.occupier();
  },
});

export const sms_campaign_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_campaign_products();
    t.crud.sms_campaign_products({ filtering: true, ordering: true });
  },
});

export const sms_campaign_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_campaign_products();
    t.crud.updateOnesms_campaign_products();
    t.crud.upsertOnesms_campaign_products();
    t.crud.deleteOnesms_campaign_products();

    t.crud.updateManysms_campaign_products();
    t.crud.deleteManysms_campaign_products();
  },
});
