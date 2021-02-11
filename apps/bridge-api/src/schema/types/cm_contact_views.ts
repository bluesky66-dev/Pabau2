import { objectType, extendType } from 'nexus';

export const cm_contact_views = objectType({
  name: 'cm_contact_views',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.view_name();
    t.model.view_data();
  },
});

export const cm_contact_viewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contact_views();
    t.crud.cm_contact_views({ filtering: true, ordering: true });
  },
});

export const cm_contact_viewsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contact_views();
    t.crud.updateOnecm_contact_views();
    t.crud.upsertOnecm_contact_views();
    t.crud.deleteOnecm_contact_views();

    t.crud.updateManycm_contact_views();
    t.crud.deleteManycm_contact_views();
  },
});
