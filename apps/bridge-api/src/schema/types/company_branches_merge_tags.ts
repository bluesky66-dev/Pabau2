import { objectType, extendType } from 'nexus';

export const company_branches_merge_tags = objectType({
  name: 'company_branches_merge_tags',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.location_id();
    t.model.tag_name();
    t.model.tag_value();
    t.model.tag_type();
  },
});

export const company_branches_merge_tagsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_branches_merge_tags();
    t.crud.company_branches_merge_tags({ filtering: true, ordering: true });
  },
});

export const company_branches_merge_tagsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_branches_merge_tags();
    t.crud.updateOnecompany_branches_merge_tags();
    t.crud.upsertOnecompany_branches_merge_tags();
    t.crud.deleteOnecompany_branches_merge_tags();

    t.crud.updateManycompany_branches_merge_tags();
    t.crud.deleteManycompany_branches_merge_tags();
  },
});
