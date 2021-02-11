import { objectType, extendType } from 'nexus';

export const zimport_photos = objectType({
  name: 'zimport_photos',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.linkhref();
    t.model.contact_custom_id();
    t.model.contact_custom_name();
    t.model.contact_custom_email();
    t.model.custom_consultation_id();
    t.model.date();
    t.model.title();
    t.model.added();
  },
});

export const zimport_photosQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_photos();
    t.crud.zimport_photos({ filtering: true, ordering: true });
  },
});

export const zimport_photosMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_photos();
    t.crud.updateOnezimport_photos();
    t.crud.upsertOnezimport_photos();
    t.crud.deleteOnezimport_photos();

    t.crud.updateManyzimport_photos();
    t.crud.deleteManyzimport_photos();
  },
});
