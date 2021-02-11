import { objectType, extendType } from 'nexus';

export const contact_images_import_helper = objectType({
  name: 'contact_images_import_helper',
  definition(t) {
    t.model.id();
    t.model.custom_contact_id();
    t.model.Fname();
    t.model.Lname();
    t.model.custom_user_name();
    t.model.image_url();
    t.model.created_date();
    t.model.occupier();
    t.model.imported();
    t.model.added();
    t.model.not_found();
  },
});

export const contact_images_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_images_import_helper();
    t.crud.contact_images_import_helpers({ filtering: true, ordering: true });
  },
});

export const contact_images_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_images_import_helper();
    t.crud.updateOnecontact_images_import_helper();
    t.crud.upsertOnecontact_images_import_helper();
    t.crud.deleteOnecontact_images_import_helper();

    t.crud.updateManycontact_images_import_helper();
    t.crud.deleteManycontact_images_import_helper();
  },
});
