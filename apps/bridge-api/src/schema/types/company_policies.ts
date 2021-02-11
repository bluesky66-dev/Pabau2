import { objectType, extendType } from 'nexus';

export const company_policies = objectType({
  name: 'company_policies',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.privacy_policy();
  },
});

export const company_policiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_policies();
    t.crud.company_policies({ filtering: true, ordering: true });
  },
});

export const company_policiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_policies();
    t.crud.updateOnecompany_policies();
    t.crud.upsertOnecompany_policies();
    t.crud.deleteOnecompany_policies();

    t.crud.updateManycompany_policies();
    t.crud.deleteManycompany_policies();
  },
});
