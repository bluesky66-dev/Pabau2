import { objectType, extendType } from 'nexus';

export const medical_form_psfs_treat_settings = objectType({
  name: 'medical_form_psfs_treat_settings',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.post_interval_mode();
    t.model.post_interval_no();
  },
});

export const medical_form_psfs_treat_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_psfs_treat_settings();
    t.crud.medical_form_psfs_treat_settings({ filtering: true, ordering: true });
  },
});

export const medical_form_psfs_treat_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_psfs_treat_settings();
    t.crud.updateOnemedical_form_psfs_treat_settings();
    t.crud.upsertOnemedical_form_psfs_treat_settings();
    t.crud.deleteOnemedical_form_psfs_treat_settings();

    t.crud.updateManymedical_form_psfs_treat_settings();
    t.crud.deleteManymedical_form_psfs_treat_settings();
  },
});
