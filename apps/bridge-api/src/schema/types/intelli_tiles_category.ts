import { objectType, extendType } from 'nexus';

export const intelli_tiles_category = objectType({
  name: 'intelli_tiles_category',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.order_number();
    t.model.is_active();
  },
});

export const intelli_tiles_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.intelli_tiles_category();
    t.crud.intelli_tiles_categories({ filtering: true, ordering: true });
  },
});

export const intelli_tiles_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneintelli_tiles_category();
    t.crud.updateOneintelli_tiles_category();
    t.crud.upsertOneintelli_tiles_category();
    t.crud.deleteOneintelli_tiles_category();

    t.crud.updateManyintelli_tiles_category();
    t.crud.deleteManyintelli_tiles_category();
  },
});
