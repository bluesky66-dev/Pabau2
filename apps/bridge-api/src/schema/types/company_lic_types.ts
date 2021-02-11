import { objectType, extendType } from 'nexus';

export const company_lic_types = objectType({
  name: 'company_lic_types',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
  },
});

export const company_lic_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_lic_types();
    t.crud.company_lic_types({ filtering: true, ordering: true });
  },
});

export const company_lic_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_lic_types();
    t.crud.updateOnecompany_lic_types();
    t.crud.upsertOnecompany_lic_types();
    t.crud.deleteOnecompany_lic_types();

    t.crud.updateManycompany_lic_types();
    t.crud.deleteManycompany_lic_types();
  },
});
