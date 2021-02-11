import { objectType, extendType } from 'nexus';

export const intelli_tiles = objectType({
  name: 'intelli_tiles',
  definition(t) {
    t.model.id();
    t.model.category_id();
    t.model.name();
    t.model.unique_name();
    t.model.mode();
    t.model.order_number();
    t.model.value_type();
    t.model.icon();
    t.model.tile_type();
    t.model.type_data();
  },
});

export const intelli_tilesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.intelli_tiles();
    t.crud.intelli_tiles({ filtering: true, ordering: true });
  },
});

export const intelli_tilesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneintelli_tiles();
    t.crud.updateOneintelli_tiles();
    t.crud.upsertOneintelli_tiles();
    t.crud.deleteOneintelli_tiles();

    t.crud.updateManyintelli_tiles();
    t.crud.deleteManyintelli_tiles();
  },
});
