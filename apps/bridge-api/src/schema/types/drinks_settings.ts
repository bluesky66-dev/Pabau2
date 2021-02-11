import { objectType, extendType } from 'nexus';

export const drinks_settings = objectType({
  name: 'drinks_settings',
  definition(t) {
    t.model.id();
    t.model.drink_name();
    t.model.company_id();
  },
});

export const drinks_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.drinks_settings();
    t.crud.drinks_settings({ filtering: true, ordering: true });
  },
});

export const drinks_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedrinks_settings();
    t.crud.updateOnedrinks_settings();
    t.crud.upsertOnedrinks_settings();
    t.crud.deleteOnedrinks_settings();

    t.crud.updateManydrinks_settings();
    t.crud.deleteManydrinks_settings();
  },
});
