import { objectType, extendType } from 'nexus';

export const ip_procedure_groups = objectType({
  name: 'ip_procedure_groups',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const ip_procedure_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_procedure_groups();
    t.crud.ip_procedure_groups({ filtering: true, ordering: true });
  },
});

export const ip_procedure_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_procedure_groups();
    t.crud.updateOneip_procedure_groups();
    t.crud.upsertOneip_procedure_groups();
    t.crud.deleteOneip_procedure_groups();

    t.crud.updateManyip_procedure_groups();
    t.crud.deleteManyip_procedure_groups();
  },
});
