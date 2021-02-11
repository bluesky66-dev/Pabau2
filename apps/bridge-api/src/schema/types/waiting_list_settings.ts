import { objectType, extendType } from 'nexus';

export const waiting_list_settings = objectType({
  name: 'waiting_list_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.sms_template_id();
    t.model.email_template_id();
    t.model.class_sms_template_id();
    t.model.class_email_template_id();
  },
});

export const waiting_list_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_list_settings();
    t.crud.waiting_list_settings({ filtering: true, ordering: true });
  },
});

export const waiting_list_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_list_settings();
    t.crud.updateOnewaiting_list_settings();
    t.crud.upsertOnewaiting_list_settings();
    t.crud.deleteOnewaiting_list_settings();

    t.crud.updateManywaiting_list_settings();
    t.crud.deleteManywaiting_list_settings();
  },
});
