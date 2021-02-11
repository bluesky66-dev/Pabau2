import { objectType, extendType } from 'nexus';

export const cm_leads_fields_order = objectType({
  name: 'cm_leads_fields_order',
  definition(t) {
    t.model.id();
    t.model.field_id();
    t.model.field_name();
    t.model.occupier();
    t.model.order_id();
    t.model.is_more();
  },
});

export const cm_leads_fields_orderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_leads_fields_order();
    t.crud.cm_leads_fields_orders({ filtering: true, ordering: true });
  },
});

export const cm_leads_fields_orderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_leads_fields_order();
    t.crud.updateOnecm_leads_fields_order();
    t.crud.upsertOnecm_leads_fields_order();
    t.crud.deleteOnecm_leads_fields_order();

    t.crud.updateManycm_leads_fields_order();
    t.crud.deleteManycm_leads_fields_order();
  },
});
