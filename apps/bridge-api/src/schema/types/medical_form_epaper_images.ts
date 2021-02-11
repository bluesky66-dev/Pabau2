import { objectType, extendType } from 'nexus';

export const medical_form_epaper_images = objectType({
  name: 'medical_form_epaper_images',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.fileName();
    t.model.linkhref();
  },
});

export const medical_form_epaper_imagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_epaper_images();
    t.crud.medical_form_epaper_images({ filtering: true, ordering: true });
  },
});

export const medical_form_epaper_imagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_epaper_images();
    t.crud.updateOnemedical_form_epaper_images();
    t.crud.upsertOnemedical_form_epaper_images();
    t.crud.deleteOnemedical_form_epaper_images();

    t.crud.updateManymedical_form_epaper_images();
    t.crud.deleteManymedical_form_epaper_images();
  },
});
