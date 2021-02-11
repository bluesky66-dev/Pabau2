import { objectType, extendType } from 'nexus';

export const guru_settings = objectType({
  name: 'guru_settings',
  definition(t) {
    t.model.id();
    t.model.days();
    t.model.company_id();
  },
});

export const guru_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.guru_settings();
    t.crud.guru_settings({ filtering: true, ordering: true });
  },
});

export const guru_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneguru_settings();
    t.crud.updateOneguru_settings();
    t.crud.upsertOneguru_settings();
    t.crud.deleteOneguru_settings();

    t.crud.updateManyguru_settings();
    t.crud.deleteManyguru_settings();
  },
});
