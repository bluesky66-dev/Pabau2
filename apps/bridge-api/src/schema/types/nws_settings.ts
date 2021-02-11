import { objectType, extendType } from 'nexus';

export const nws_settings = objectType({
  name: 'nws_settings',
  definition(t) {
    t.model.id();
    t.model.key();
    t.model.val();
    t.model.company();
  },
});

export const nws_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_settings();
    t.crud.nws_settings({ filtering: true, ordering: true });
  },
});

export const nws_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_settings();
    t.crud.updateOnenws_settings();
    t.crud.upsertOnenws_settings();
    t.crud.deleteOnenws_settings();

    t.crud.updateManynws_settings();
    t.crud.deleteManynws_settings();
  },
});
