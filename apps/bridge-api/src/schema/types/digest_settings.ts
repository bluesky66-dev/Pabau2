import { objectType, extendType } from 'nexus';

export const digest_settings = objectType({
  name: 'digest_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.enabled();
    t.model.frequency();
    t.model.included_users();
    t.model.LastSent();
    t.model.end_week();
  },
});

export const digest_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.digest_settings();
    t.crud.digest_settings({ filtering: true, ordering: true });
  },
});

export const digest_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedigest_settings();
    t.crud.updateOnedigest_settings();
    t.crud.upsertOnedigest_settings();
    t.crud.deleteOnedigest_settings();

    t.crud.updateManydigest_settings();
    t.crud.deleteManydigest_settings();
  },
});
