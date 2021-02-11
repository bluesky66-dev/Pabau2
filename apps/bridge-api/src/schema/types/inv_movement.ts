import { objectType, extendType } from 'nexus';

export const inv_movement = objectType({
  name: 'inv_movement',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.location_id();
    t.model.date();
    t.model.type();
    t.model.quantity();
    t.model.new_quantity();
    t.model.entered_by();
    t.model.product_id();
    t.model.description();
    t.model.room_id();
    t.model.sale_item_id();
    t.model.contact_id();
  },
});

export const inv_movementQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_movement();
    t.crud.inv_movements({ filtering: true, ordering: true });
  },
});

export const inv_movementMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_movement();
    t.crud.updateOneinv_movement();
    t.crud.upsertOneinv_movement();
    t.crud.deleteOneinv_movement();

    t.crud.updateManyinv_movement();
    t.crud.deleteManyinv_movement();
  },
});
