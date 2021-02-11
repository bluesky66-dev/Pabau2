import { objectType, extendType } from 'nexus';

export const share_image = objectType({
  name: 'share_image',
  definition(t) {
    t.model.id();
    t.model.photo_url();
    t.model.passcode();
    t.model.contact_id();
    t.model.company_id();
    t.model.share_date();
  },
});

export const share_imageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.share_image();
    t.crud.share_images({ filtering: true, ordering: true });
  },
});

export const share_imageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneshare_image();
    t.crud.updateOneshare_image();
    t.crud.upsertOneshare_image();
    t.crud.deleteOneshare_image();

    t.crud.updateManyshare_image();
    t.crud.deleteManyshare_image();
  },
});
