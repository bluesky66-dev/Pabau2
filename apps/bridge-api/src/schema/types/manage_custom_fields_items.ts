import { objectType, extendType } from 'nexus';

export const manage_custom_fields_items = objectType({
  name: 'manage_custom_fields_items',
  definition(t) {
    t.model.id();
    t.model.field_id();
    t.model.occupier();
    t.model.item_label();
    t.model.item_value();
    t.model.item_order();
  },
});

export const manage_custom_fields_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_custom_fields_items();
    t.crud.manage_custom_fields_items({ filtering: true, ordering: true });
  },
});

export const manage_custom_fields_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_custom_fields_items();
    t.crud.updateOnemanage_custom_fields_items();
    t.crud.upsertOnemanage_custom_fields_items();
    t.crud.deleteOnemanage_custom_fields_items();

    t.crud.updateManymanage_custom_fields_items();
    t.crud.deleteManymanage_custom_fields_items();
  },
});
