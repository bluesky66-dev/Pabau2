import { objectType, extendType } from 'nexus';

export const template_settings = objectType({
  name: 'template_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.template_type();
    t.model.css_name();
    t.model.css_value();
  },
});

export const template_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.template_settings();
    t.crud.template_settings({ filtering: true, ordering: true });
  },
});

export const template_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemplate_settings();
    t.crud.updateOnetemplate_settings();
    t.crud.upsertOnetemplate_settings();
    t.crud.deleteOnetemplate_settings();

    t.crud.updateManytemplate_settings();
    t.crud.deleteManytemplate_settings();
  },
});
