import { objectType, extendType } from 'nexus';

export const cm_leads_groups = objectType({
  name: 'cm_leads_groups',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
    t.model.is_default();
    t.model.default_view();
    t.model.restrict_view();
    t.model.auto_assign_user();
  },
});

export const cm_leads_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_leads_groups();
    t.crud.cm_leads_groups({ filtering: true, ordering: true });
  },
});

export const cm_leads_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_leads_groups();
    t.crud.updateOnecm_leads_groups();
    t.crud.upsertOnecm_leads_groups();
    t.crud.deleteOnecm_leads_groups();

    t.crud.updateManycm_leads_groups();
    t.crud.deleteManycm_leads_groups();
  },
});
