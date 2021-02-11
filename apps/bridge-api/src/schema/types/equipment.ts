import { objectType, extendType } from 'nexus';

export const equipment = objectType({
  name: 'equipment',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.equipment_name();
    t.model.quantity();
    t.model.is_active();
    t.model.field_order();
  },
});

export const equipmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.equipment();
    t.crud.equipment({ filtering: true, ordering: true });
  },
});

export const equipmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneequipment();
    t.crud.updateOneequipment();
    t.crud.upsertOneequipment();
    t.crud.deleteOneequipment();

    t.crud.updateManyequipment();
    t.crud.deleteManyequipment();
  },
});
