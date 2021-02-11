import { objectType, extendType } from 'nexus';

export const company_bday_settings = objectType({
  name: 'company_bday_settings',
  definition(t) {
    t.model.bday_id();
    t.model.bday_cid();
    t.model.bday_before();
    t.model.bday_file();
    t.model.bday_update();
    t.model.bday_eSender();
    t.model.bday_eSubject();
    t.model.bday_eMessage();
    t.model.status();
    t.model.email_activated();
    t.model.sms_activated();
    t.model.bday_sMessage();
    t.model.bday_sName();
    t.model.bday_before_sms();
    t.model.module();
    t.model.email_template_id();
    t.model.sms_template_id();
  },
});

export const company_bday_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_bday_settings();
    t.crud.company_bday_settings({ filtering: true, ordering: true });
  },
});

export const company_bday_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_bday_settings();
    t.crud.updateOnecompany_bday_settings();
    t.crud.upsertOnecompany_bday_settings();
    t.crud.deleteOnecompany_bday_settings();

    t.crud.updateManycompany_bday_settings();
    t.crud.deleteManycompany_bday_settings();
  },
});
