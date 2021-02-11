import { objectType, extendType } from 'nexus';

export const class_template_settings = objectType({
  name: 'class_template_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.class_wait_list_template_enable();
    t.model.class_wait_list_template_id();
    t.model.class_wait_list_sms_template_enable();
    t.model.class_wait_list_sms_template_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const class_template_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_template_settings();
    t.crud.class_template_settings({ filtering: true, ordering: true });
  },
});

export const class_template_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_template_settings();
    t.crud.updateOneclass_template_settings();
    t.crud.upsertOneclass_template_settings();
    t.crud.deleteOneclass_template_settings();

    t.crud.updateManyclass_template_settings();
    t.crud.deleteManyclass_template_settings();
  },
});
