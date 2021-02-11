import { objectType, extendType } from 'nexus';

export const tiles = objectType({
  name: 'tiles',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.category();
    t.model.description();
  },
});

export const tilesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tiles();
    t.crud.tiles({ filtering: true, ordering: true });
  },
});

export const tilesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetiles();
    t.crud.updateOnetiles();
    t.crud.upsertOnetiles();
    t.crud.deleteOnetiles();

    t.crud.updateManytiles();
    t.crud.deleteManytiles();
  },
});
