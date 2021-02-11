import { objectType, extendType } from 'nexus';

export const zimport_treatments = objectType({
  name: 'zimport_treatments',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.treatment_name();
  },
});

export const zimport_treatmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_treatments();
    t.crud.zimport_treatments({ filtering: true, ordering: true });
  },
});

export const zimport_treatmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_treatments();
    t.crud.updateOnezimport_treatments();
    t.crud.upsertOnezimport_treatments();
    t.crud.deleteOnezimport_treatments();

    t.crud.updateManyzimport_treatments();
    t.crud.deleteManyzimport_treatments();
  },
});
