import { objectType, extendType } from 'nexus';

export const at_settings = objectType({
  name: 'at_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.logo();
    t.model.background();
    t.model.font_family();
  },
});

export const at_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_settings();
    t.crud.at_settings({ filtering: true, ordering: true });
  },
});

export const at_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_settings();
    t.crud.updateOneat_settings();
    t.crud.upsertOneat_settings();
    t.crud.deleteOneat_settings();

    t.crud.updateManyat_settings();
    t.crud.deleteManyat_settings();
  },
});
