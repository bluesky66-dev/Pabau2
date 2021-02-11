import { objectType, extendType } from 'nexus';

export const global_meta = objectType({
  name: 'global_meta',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
  },
});

export const global_metaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.global_meta();
    t.crud.global_metas({ filtering: true, ordering: true });
  },
});

export const global_metaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneglobal_meta();
    t.crud.updateOneglobal_meta();
    t.crud.upsertOneglobal_meta();
    t.crud.deleteOneglobal_meta();

    t.crud.updateManyglobal_meta();
    t.crud.deleteManyglobal_meta();
  },
});
