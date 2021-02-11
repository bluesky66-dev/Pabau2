import { objectType, extendType } from 'nexus';

export const client_form_settings = objectType({
  name: 'client_form_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.enable_medical();
    t.model.form_id();
    t.model.not_seen_months();
    t.model.enable_new_and_old();
    t.model.checked_by_default();
    t.model.new_client_template();
    t.model.not_seen_template();
  },
});

export const client_form_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.client_form_settings();
    t.crud.client_form_settings({ filtering: true, ordering: true });
  },
});

export const client_form_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclient_form_settings();
    t.crud.updateOneclient_form_settings();
    t.crud.upsertOneclient_form_settings();
    t.crud.deleteOneclient_form_settings();

    t.crud.updateManyclient_form_settings();
    t.crud.deleteManyclient_form_settings();
  },
});
