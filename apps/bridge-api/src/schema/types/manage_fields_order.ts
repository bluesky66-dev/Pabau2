import { objectType, extendType } from 'nexus';

export const manage_fields_order = objectType({
  name: 'manage_fields_order',
  definition(t) {
    t.model.id();
    t.model.field_id();
    t.model.field_name();
    t.model.occupier();
    t.model.order_id();
    t.model.pinned();
    t.model.is_more();
  },
});

export const manage_fields_orderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_fields_order();
    t.crud.manage_fields_orders({ filtering: true, ordering: true });
  },
});

export const manage_fields_orderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_fields_order();
    t.crud.updateOnemanage_fields_order();
    t.crud.upsertOnemanage_fields_order();
    t.crud.deleteOnemanage_fields_order();

    t.crud.updateManymanage_fields_order();
    t.crud.deleteManymanage_fields_order();
  },
});
