import { objectType, extendType } from 'nexus';

export const label_settings = objectType({
  name: 'label_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.column_count();
    t.model.row_count();
  },
});

export const label_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.label_settings();
    t.crud.label_settings({ filtering: true, ordering: true });
  },
});

export const label_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelabel_settings();
    t.crud.updateOnelabel_settings();
    t.crud.upsertOnelabel_settings();
    t.crud.deleteOnelabel_settings();

    t.crud.updateManylabel_settings();
    t.crud.deleteManylabel_settings();
  },
});
