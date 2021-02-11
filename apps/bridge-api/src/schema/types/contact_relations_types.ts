import { objectType, extendType } from 'nexus';

export const contact_relations_types = objectType({
  name: 'contact_relations_types',
  definition(t) {
    t.model.id();
    t.model.reverse_is();
    t.model.relation_name();
    t.model.company_id();
  },
});

export const contact_relations_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_relations_types();
    t.crud.contact_relations_types({ filtering: true, ordering: true });
  },
});

export const contact_relations_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_relations_types();
    t.crud.updateOnecontact_relations_types();
    t.crud.upsertOnecontact_relations_types();
    t.crud.deleteOnecontact_relations_types();

    t.crud.updateManycontact_relations_types();
    t.crud.deleteManycontact_relations_types();
  },
});
