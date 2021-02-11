import { objectType, extendType } from 'nexus';

export const radio_tracks = objectType({
  name: 'radio_tracks',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.filename();
    t.model.title();
    t.model.is_spotify();
  },
});

export const radio_tracksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.radio_tracks();
    t.crud.radio_tracks({ filtering: true, ordering: true });
  },
});

export const radio_tracksMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneradio_tracks();
    t.crud.updateOneradio_tracks();
    t.crud.upsertOneradio_tracks();
    t.crud.deleteOneradio_tracks();

    t.crud.updateManyradio_tracks();
    t.crud.deleteManyradio_tracks();
  },
});
