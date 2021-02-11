import { objectType, extendType } from 'nexus';

export const photo_album = objectType({
  name: 'photo_album',
  definition(t) {
    t.model.id();
    t.model.album_name();
    t.model.contact_id();
    t.model.occupier();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const photo_albumQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.photo_album();
    t.crud.photo_albums({ filtering: true, ordering: true });
  },
});

export const photo_albumMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnephoto_album();
    t.crud.updateOnephoto_album();
    t.crud.upsertOnephoto_album();
    t.crud.deleteOnephoto_album();

    t.crud.updateManyphoto_album();
    t.crud.deleteManyphoto_album();
  },
});
