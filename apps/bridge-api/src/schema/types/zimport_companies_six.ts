import { objectType, extendType } from 'nexus';

export const zimport_companies_six = objectType({
  name: 'zimport_companies_six',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_name();
  },
});

export const zimport_companies_sixQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_companies_six();
    t.crud.zimport_companies_sixes({ filtering: true, ordering: true });
  },
});

export const zimport_companies_sixMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_companies_six();
    t.crud.updateOnezimport_companies_six();
    t.crud.upsertOnezimport_companies_six();
    t.crud.deleteOnezimport_companies_six();

    t.crud.updateManyzimport_companies_six();
    t.crud.deleteManyzimport_companies_six();
  },
});
