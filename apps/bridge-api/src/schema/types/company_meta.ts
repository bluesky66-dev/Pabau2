import { objectType, extendType } from 'nexus';

export const company_meta = objectType({
  name: 'company_meta',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.meta_name();
    t.model.meta_value();
  },
});

export const company_metaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_meta();
    t.crud.company_metas({ filtering: true, ordering: true });
  },
});

export const company_metaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_meta();
    t.crud.updateOnecompany_meta();
    t.crud.upsertOnecompany_meta();
    t.crud.deleteOnecompany_meta();

    t.crud.updateManycompany_meta();
    t.crud.deleteManycompany_meta();
  },
});
