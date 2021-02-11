import { objectType, extendType } from 'nexus';

export const contact_types = objectType({
  name: 'contact_types',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.minimal_fields();
  },
});

export const contact_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_types();
    t.crud.contact_types({ filtering: true, ordering: true });
  },
});

export const contact_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_types();
    t.crud.updateOnecontact_types();
    t.crud.upsertOnecontact_types();
    t.crud.deleteOnecontact_types();

    t.crud.updateManycontact_types();
    t.crud.deleteManycontact_types();
  },
});
