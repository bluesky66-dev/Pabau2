import { objectType, extendType } from 'nexus';

export const healthcode_insurers = objectType({
  name: 'healthcode_insurers',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.code();
    t.model.name();
    t.model.edi();
    t.model.me();
  },
});

export const healthcode_insurersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.healthcode_insurers();
    t.crud.healthcode_insurers({ filtering: true, ordering: true });
  },
});

export const healthcode_insurersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnehealthcode_insurers();
    t.crud.updateOnehealthcode_insurers();
    t.crud.upsertOnehealthcode_insurers();
    t.crud.deleteOnehealthcode_insurers();

    t.crud.updateManyhealthcode_insurers();
    t.crud.deleteManyhealthcode_insurers();
  },
});
