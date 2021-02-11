import { objectType, extendType } from 'nexus';

export const nws_newsletter_images = objectType({
  name: 'nws_newsletter_images',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.linkhref();
    t.model.date();
    t.model.user_id();
  },
});

export const nws_newsletter_imagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_newsletter_images();
    t.crud.nws_newsletter_images({ filtering: true, ordering: true });
  },
});

export const nws_newsletter_imagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_newsletter_images();
    t.crud.updateOnenws_newsletter_images();
    t.crud.upsertOnenws_newsletter_images();
    t.crud.deleteOnenws_newsletter_images();

    t.crud.updateManynws_newsletter_images();
    t.crud.deleteManynws_newsletter_images();
  },
});
