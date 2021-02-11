import { objectType, extendType } from 'nexus';

export const psfs_settings = objectType({
  name: 'psfs_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.psfs_initial_template_id();
    t.model.psfs_followup_template_id();
    t.model.psfs_initial_enable();
    t.model.psfs_followup_enable();
    t.model.psfs_form_id();
    t.model.modified_by();
    t.model.modified_date();
  },
});

export const psfs_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.psfs_settings();
    t.crud.psfs_settings({ filtering: true, ordering: true });
  },
});

export const psfs_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepsfs_settings();
    t.crud.updateOnepsfs_settings();
    t.crud.upsertOnepsfs_settings();
    t.crud.deleteOnepsfs_settings();

    t.crud.updateManypsfs_settings();
    t.crud.deleteManypsfs_settings();
  },
});
