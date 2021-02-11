import { objectType, extendType } from 'nexus';

export const zimport_loyalty = objectType({
  name: 'zimport_loyalty',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_contact_name();
    t.model.points();
    t.model.contact_id();
    t.model.email();
    t.model.added();
  },
});

export const zimport_loyaltyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_loyalty();
    t.crud.zimport_loyalties({ filtering: true, ordering: true });
  },
});

export const zimport_loyaltyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_loyalty();
    t.crud.updateOnezimport_loyalty();
    t.crud.upsertOnezimport_loyalty();
    t.crud.deleteOnezimport_loyalty();

    t.crud.updateManyzimport_loyalty();
    t.crud.deleteManyzimport_loyalty();
  },
});
