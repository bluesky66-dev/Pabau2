import { objectType, extendType } from 'nexus';

export const nws_image = objectType({
  name: 'nws_image',
  definition(t) {
    t.model.image_id();
    t.model.image_url();
    t.model.company();
  },
});

export const nws_imageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_image();
    t.crud.nws_images({ filtering: true, ordering: true });
  },
});

export const nws_imageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_image();
    t.crud.updateOnenws_image();
    t.crud.upsertOnenws_image();
    t.crud.deleteOnenws_image();

    t.crud.updateManynws_image();
    t.crud.deleteManynws_image();
  },
});
