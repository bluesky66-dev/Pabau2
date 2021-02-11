import { objectType, extendType } from 'nexus';

export const inv_lots = objectType({
  name: 'inv_lots',
  definition(t) {
    t.model.id();
    t.model.reference_no();
    t.model.lot_name();
    t.model.note();
    t.model.color();
    t.model.category();
    t.model.container_id();
    t.model.occupier();
    t.model.rolls();
    t.model.uid();
    t.model.created_by();
    t.model.modified_by();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_lotsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_lots();
    t.crud.inv_lots({ filtering: true, ordering: true });
  },
});

export const inv_lotsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_lots();
    t.crud.updateOneinv_lots();
    t.crud.upsertOneinv_lots();
    t.crud.deleteOneinv_lots();

    t.crud.updateManyinv_lots();
    t.crud.deleteManyinv_lots();
  },
});
