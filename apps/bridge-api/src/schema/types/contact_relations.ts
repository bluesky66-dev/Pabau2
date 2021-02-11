import { objectType, extendType } from 'nexus';

export const contact_relations = objectType({
  name: 'contact_relations',
  definition(t) {
    t.model.id();
    t.model.main_contact_id();
    t.model.rel_contact_id();
    t.model.relation_id();
    t.model.imported();
  },
});

export const contact_relationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_relations();
    t.crud.contact_relations({ filtering: true, ordering: true });
  },
});

export const contact_relationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_relations();
    t.crud.updateOnecontact_relations();
    t.crud.upsertOnecontact_relations();
    t.crud.deleteOnecontact_relations();

    t.crud.updateManycontact_relations();
    t.crud.deleteManycontact_relations();
  },
});
