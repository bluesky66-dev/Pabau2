import { objectType, extendType } from 'nexus';

export const lead_scoring_settings = objectType({
  name: 'lead_scoring_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.display_name();
    t.model.code_name();
    t.model.points();
    t.model.activity_mode();
    t.model.date_added();
    t.model.user_added();
  },
});

export const lead_scoring_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_scoring_settings();
    t.crud.lead_scoring_settings({ filtering: true, ordering: true });
  },
});

export const lead_scoring_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_scoring_settings();
    t.crud.updateOnelead_scoring_settings();
    t.crud.upsertOnelead_scoring_settings();
    t.crud.deleteOnelead_scoring_settings();

    t.crud.updateManylead_scoring_settings();
    t.crud.deleteManylead_scoring_settings();
  },
});
