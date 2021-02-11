import { objectType, extendType } from 'nexus';

export const staff_meta = objectType({
  name: 'staff_meta',
  definition(t) {
    t.model.id();
    t.model.staff_id();
    t.model.meta_name();
    t.model.meta_value();
  },
});

export const staff_metaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_meta();
    t.crud.staff_metas({ filtering: true, ordering: true });
  },
});

export const staff_metaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_meta();
    t.crud.updateOnestaff_meta();
    t.crud.upsertOnestaff_meta();
    t.crud.deleteOnestaff_meta();

    t.crud.updateManystaff_meta();
    t.crud.deleteManystaff_meta();
  },
});
