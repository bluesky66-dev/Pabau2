import { objectType, extendType } from 'nexus';

export const consultation_theme = objectType({
  name: 'consultation_theme',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.header_theme();
    t.model.logo();
    t.model.button_col();
    t.model.background_image();
    t.model.video_url();
    t.model.intro_message();
  },
});

export const consultation_themeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.consultation_theme();
    t.crud.consultation_themes({ filtering: true, ordering: true });
  },
});

export const consultation_themeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconsultation_theme();
    t.crud.updateOneconsultation_theme();
    t.crud.upsertOneconsultation_theme();
    t.crud.deleteOneconsultation_theme();

    t.crud.updateManyconsultation_theme();
    t.crud.deleteManyconsultation_theme();
  },
});
