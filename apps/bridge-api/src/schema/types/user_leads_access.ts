import { objectType, extendType } from 'nexus';

export const user_leads_access = objectType({
  name: 'user_leads_access',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.lead_id();
    t.model.access_date();
  },
});

export const user_leads_accessQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_leads_access();
    t.crud.user_leads_accesses({ filtering: true, ordering: true });
  },
});

export const user_leads_accessMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_leads_access();
    t.crud.updateOneuser_leads_access();
    t.crud.upsertOneuser_leads_access();
    t.crud.deleteOneuser_leads_access();

    t.crud.updateManyuser_leads_access();
    t.crud.deleteManyuser_leads_access();
  },
});
