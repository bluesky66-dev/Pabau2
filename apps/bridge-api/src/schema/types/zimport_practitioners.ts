import { objectType, extendType } from 'nexus';

export const zimport_practitioners = objectType({
  name: 'zimport_practitioners',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.name();
  },
});

export const zimport_practitionersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_practitioners();
    t.crud.zimport_practitioners({ filtering: true, ordering: true });
  },
});

export const zimport_practitionersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_practitioners();
    t.crud.updateOnezimport_practitioners();
    t.crud.upsertOnezimport_practitioners();
    t.crud.deleteOnezimport_practitioners();

    t.crud.updateManyzimport_practitioners();
    t.crud.deleteManyzimport_practitioners();
  },
});
