import { objectType, extendType } from 'nexus';

export const price_level_settings = objectType({
  name: 'price_level_settings',
  definition(t) {
    t.model.id();
    t.model.day_name();
    t.model.day_start_time();
    t.model.day_end_time();
    t.model.discount_type();
    t.model.discount();
    t.model.discount_mode();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const price_level_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.price_level_settings();
    t.crud.price_level_settings({ filtering: true, ordering: true });
  },
});

export const price_level_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneprice_level_settings();
    t.crud.updateOneprice_level_settings();
    t.crud.upsertOneprice_level_settings();
    t.crud.deleteOneprice_level_settings();

    t.crud.updateManyprice_level_settings();
    t.crud.deleteManyprice_level_settings();
  },
});
