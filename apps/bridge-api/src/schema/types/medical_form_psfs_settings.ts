import { objectType, extendType } from 'nexus';

export const medical_form_psfs_settings = objectType({
  name: 'medical_form_psfs_settings',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.psfs_start();
    t.model.interval_mode();
    t.model.interval_no();
    t.model.psfs_end();
    t.model.post_treatment_mode();
    t.model.post_treatment_no();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const medical_form_psfs_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_psfs_settings();
    t.crud.medical_form_psfs_settings({ filtering: true, ordering: true });
  },
});

export const medical_form_psfs_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_psfs_settings();
    t.crud.updateOnemedical_form_psfs_settings();
    t.crud.upsertOnemedical_form_psfs_settings();
    t.crud.deleteOnemedical_form_psfs_settings();

    t.crud.updateManymedical_form_psfs_settings();
    t.crud.deleteManymedical_form_psfs_settings();
  },
});
