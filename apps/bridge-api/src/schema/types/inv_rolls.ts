import { objectType, extendType } from 'nexus';

export const inv_rolls = objectType({
  name: 'inv_rolls',
  definition(t) {
    t.model.id();
    t.model.lot_id();
    t.model.lot_reference_no();
    t.model.color();
    t.model.weight();
    t.model.meters();
    t.model.fabric();
    t.model.rolls();
    t.model.product_code();
    t.model.note();
    t.model.occupier();
    t.model.uid();
    t.model.created_by();
    t.model.modified_by();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_rollsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_rolls();
    t.crud.inv_rolls({ filtering: true, ordering: true });
  },
});

export const inv_rollsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_rolls();
    t.crud.updateOneinv_rolls();
    t.crud.upsertOneinv_rolls();
    t.crud.deleteOneinv_rolls();

    t.crud.updateManyinv_rolls();
    t.crud.deleteManyinv_rolls();
  },
});
