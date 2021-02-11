import { objectType, extendType } from 'nexus';

export const cleverpin_settings = objectType({
  name: 'cleverpin_settings',
  definition(t) {
    t.model.id();
    t.model.image_url();
    t.model.company_id();
  },
});

export const cleverpin_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cleverpin_settings();
    t.crud.cleverpin_settings({ filtering: true, ordering: true });
  },
});

export const cleverpin_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecleverpin_settings();
    t.crud.updateOnecleverpin_settings();
    t.crud.upsertOnecleverpin_settings();
    t.crud.deleteOnecleverpin_settings();

    t.crud.updateManycleverpin_settings();
    t.crud.deleteManycleverpin_settings();
  },
});
