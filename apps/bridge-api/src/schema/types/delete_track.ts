import { objectType, extendType } from 'nexus';

export const delete_track = objectType({
  name: 'delete_track',
  definition(t) {
    t.model.id();
    t.model.details();
    t.model.user_id();
    t.model.date();
    t.model.ip();
  },
});

export const delete_trackQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.delete_track();
    t.crud.delete_tracks({ filtering: true, ordering: true });
  },
});

export const delete_trackMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedelete_track();
    t.crud.updateOnedelete_track();
    t.crud.upsertOnedelete_track();
    t.crud.deleteOnedelete_track();

    t.crud.updateManydelete_track();
    t.crud.deleteManydelete_track();
  },
});
