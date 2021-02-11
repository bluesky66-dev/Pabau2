import { objectType, extendType } from 'nexus';

export const theatre_list_date_settings = objectType({
  name: 'theatre_list_date_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.date();
    t.model.hospital_id();
    t.model.anesthetist_id();
    t.model.start_time();
    t.model.end_time();
    t.model.notes();
    t.model.theatre_list_anesthetists();
    t.model.theatre_list_hospitals();
  },
});

export const theatre_list_date_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.theatre_list_date_settings();
    t.crud.theatre_list_date_settings({ filtering: true, ordering: true });
  },
});

export const theatre_list_date_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetheatre_list_date_settings();
    t.crud.updateOnetheatre_list_date_settings();
    t.crud.upsertOnetheatre_list_date_settings();
    t.crud.deleteOnetheatre_list_date_settings();

    t.crud.updateManytheatre_list_date_settings();
    t.crud.deleteManytheatre_list_date_settings();
  },
});
