import { objectType, extendType } from 'nexus';

export const block_reason = objectType({
  name: 'block_reason',
  definition(t) {
    t.model.id();
    t.model.reason_name();
    t.model.occupier();
    t.model.is_active();
    t.model.block_color();
    t.model.is_paid();
    t.model.default_time();
    t.model.type();
    t.model.custom_id();
  },
});

export const block_reasonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.block_reason();
    t.crud.block_reasons({ filtering: true, ordering: true });
  },
});

export const block_reasonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneblock_reason();
    t.crud.updateOneblock_reason();
    t.crud.upsertOneblock_reason();
    t.crud.deleteOneblock_reason();

    t.crud.updateManyblock_reason();
    t.crud.deleteManyblock_reason();
  },
});
