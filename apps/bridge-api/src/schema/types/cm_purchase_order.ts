import { objectType, extendType } from 'nexus';

export const cm_purchase_order = objectType({
  name: 'cm_purchase_order',
  definition(t) {
    t.model.id();
    t.model.order_no();
    t.model.date();
    t.model.status();
    t.model.company_id();
    t.model.location_id();
    t.model.user_id();
    t.model.supplier_id();
    t.model.supplier_status();
    t.model.delivery_date();
    t.model.notes();
    t.model.is_hidden();
    t.model.destination_arrival();
    t.model.freight_terms();
    t.model.terms_of_payment();
    t.model.currency();
    t.model.tags();
    t.model.category_id();
    t.model.lpo_number();
    t.model.grn_number();
  },
});

export const cm_purchase_orderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_purchase_order();
    t.crud.cm_purchase_orders({ filtering: true, ordering: true });
  },
});

export const cm_purchase_orderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_purchase_order();
    t.crud.updateOnecm_purchase_order();
    t.crud.upsertOnecm_purchase_order();
    t.crud.deleteOnecm_purchase_order();

    t.crud.updateManycm_purchase_order();
    t.crud.deleteManycm_purchase_order();
  },
});
