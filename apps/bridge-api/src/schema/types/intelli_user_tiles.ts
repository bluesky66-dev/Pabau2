import { objectType, extendType } from 'nexus';

export const intelli_user_tiles = objectType({
  name: 'intelli_user_tiles',
  definition(t) {
    t.model.id();
    t.model.tile_id();
    t.model.occupier();
    t.model.user_id();
    t.model.related_id();
    t.model.order_number();
  },
});

export const intelli_user_tilesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.intelli_user_tiles();
    t.crud.intelli_user_tiles({ filtering: true, ordering: true });
  },
});

export const intelli_user_tilesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneintelli_user_tiles();
    t.crud.updateOneintelli_user_tiles();
    t.crud.upsertOneintelli_user_tiles();
    t.crud.deleteOneintelli_user_tiles();

    t.crud.updateManyintelli_user_tiles();
    t.crud.deleteManyintelli_user_tiles();
  },
});
