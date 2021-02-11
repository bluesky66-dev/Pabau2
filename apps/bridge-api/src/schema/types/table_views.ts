import { objectType, extendType } from 'nexus';

export const table_views = objectType({
  name: 'table_views',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.type();
    t.model.name();
    t.model.columns();
  },
});

export const table_viewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.table_views();
    t.crud.table_views({ filtering: true, ordering: true });
  },
});

export const table_viewsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetable_views();
    t.crud.updateOnetable_views();
    t.crud.upsertOnetable_views();
    t.crud.deleteOnetable_views();

    t.crud.updateManytable_views();
    t.crud.deleteManytable_views();
  },
});
