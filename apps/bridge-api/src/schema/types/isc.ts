import { objectType, extendType } from 'nexus';

export const isc = objectType({
  name: 'isc',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.description();
    t.model.chapter();
    t.model.category();
    t.model.status();
    t.model.gender();
  },
});

export const iscQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.isc();
    t.crud.iscs({ filtering: true, ordering: true });
  },
});

export const iscMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneisc();
    t.crud.updateOneisc();
    t.crud.upsertOneisc();
    t.crud.deleteOneisc();

    t.crud.updateManyisc();
    t.crud.deleteManyisc();
  },
});
