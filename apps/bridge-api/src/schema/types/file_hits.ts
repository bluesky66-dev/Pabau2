import { objectType, extendType } from 'nexus';

export const file_hits = objectType({
  name: 'file_hits',
  definition(t) {
    t.model.id();
    t.model.file();
    t.model.hits();
  },
});

export const file_hitsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.file_hits();
    t.crud.file_hits({ filtering: true, ordering: true });
  },
});

export const file_hitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefile_hits();
    t.crud.updateOnefile_hits();
    t.crud.upsertOnefile_hits();
    t.crud.deleteOnefile_hits();

    t.crud.updateManyfile_hits();
    t.crud.deleteManyfile_hits();
  },
});
