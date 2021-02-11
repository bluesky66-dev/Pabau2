import { objectType, extendType } from 'nexus';

export const medical_form_theme_settings = objectType({
  name: 'medical_form_theme_settings',
  definition(t) {
    t.model.id();
    t.model.medical_form_id();
    t.model.formHeadercolor();
    t.model.formSectioncolor();
    t.model.formCheckboxcolor();
    t.model.formButtontext();
    t.model.formButtoncolor();
    t.model.formFontstyle();
    t.model.formFontcolor();
    t.model.formDropdowncolor();
    t.model.formThankyoumsg();
    t.model.formCompanylogo();
    t.model.formRedirecturl();
    t.model.formBackgroundcolor();
    t.model.formResultemail();
    t.model.formnotriggers();
    t.model.formsubmissiontrigger();
    t.model.formformulaetrigger();
    t.model.formPullpreviousanswers();
  },
});

export const medical_form_theme_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_theme_settings();
    t.crud.medical_form_theme_settings({ filtering: true, ordering: true });
  },
});

export const medical_form_theme_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_theme_settings();
    t.crud.updateOnemedical_form_theme_settings();
    t.crud.upsertOnemedical_form_theme_settings();
    t.crud.deleteOnemedical_form_theme_settings();

    t.crud.updateManymedical_form_theme_settings();
    t.crud.deleteManymedical_form_theme_settings();
  },
});
