import { objectType, extendType } from 'nexus';

export const lead_views = objectType({
  name: 'lead_views',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.view_name();
    t.model.view_data();
  },
});

export const lead_viewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_views();
    t.crud.lead_views({ filtering: true, ordering: true });
  },
});

export const lead_viewsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_views();
    t.crud.updateOnelead_views();
    t.crud.upsertOnelead_views();
    t.crud.deleteOnelead_views();

    t.crud.updateManylead_views();
    t.crud.deleteManylead_views();
  },
});
