import { objectType, extendType } from 'nexus';

export const lead_dropdown_items = objectType({
  name: 'lead_dropdown_items',
  definition(t) {
    t.model.id();
    t.model.item_name();
    t.model.company_id();
    t.model.capture_id();
    t.model.price_category_id();
  },
});

export const lead_dropdown_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_dropdown_items();
    t.crud.lead_dropdown_items({ filtering: true, ordering: true });
  },
});

export const lead_dropdown_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_dropdown_items();
    t.crud.updateOnelead_dropdown_items();
    t.crud.upsertOnelead_dropdown_items();
    t.crud.deleteOnelead_dropdown_items();

    t.crud.updateManylead_dropdown_items();
    t.crud.deleteManylead_dropdown_items();
  },
});
