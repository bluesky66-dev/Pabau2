import { objectType, extendType } from 'nexus';

export const levels_indicator = objectType({
  name: 'levels_indicator',
  definition(t) {
    t.model.id();
    t.model.indicator_id();
    t.model.level();
    t.model.level_value();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const levels_indicatorQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.levels_indicator();
    t.crud.levels_indicators({ filtering: true, ordering: true });
  },
});

export const levels_indicatorMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelevels_indicator();
    t.crud.updateOnelevels_indicator();
    t.crud.upsertOnelevels_indicator();
    t.crud.deleteOnelevels_indicator();

    t.crud.updateManylevels_indicator();
    t.crud.deleteManylevels_indicator();
  },
});
