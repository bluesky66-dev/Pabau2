import { objectType, extendType } from 'nexus';

export const company_branch_groups = objectType({
  name: 'company_branch_groups',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.shared_data();
    t.model.company_id();
  },
});

export const company_branch_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_branch_groups();
    t.crud.company_branch_groups({ filtering: true, ordering: true });
  },
});

export const company_branch_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_branch_groups();
    t.crud.updateOnecompany_branch_groups();
    t.crud.upsertOnecompany_branch_groups();
    t.crud.deleteOnecompany_branch_groups();

    t.crud.updateManycompany_branch_groups();
    t.crud.deleteManycompany_branch_groups();
  },
});
