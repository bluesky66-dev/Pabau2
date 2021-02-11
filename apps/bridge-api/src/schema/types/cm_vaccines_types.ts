import { objectType, extendType } from 'nexus';

export const cm_vaccines_types = objectType({
  name: 'cm_vaccines_types',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.field_order();
    t.model.company_id();
  },
});

export const cm_vaccines_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_vaccines_types();
    t.crud.cm_vaccines_types({ filtering: true, ordering: true });
  },
});

export const cm_vaccines_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_vaccines_types();
    t.crud.updateOnecm_vaccines_types();
    t.crud.upsertOnecm_vaccines_types();
    t.crud.deleteOnecm_vaccines_types();

    t.crud.updateManycm_vaccines_types();
    t.crud.deleteManycm_vaccines_types();
  },
});
