import { objectType, extendType } from 'nexus';

export const phi_assesment_entries = objectType({
  name: 'phi_assesment_entries',
  definition(t) {
    t.model.id();
    t.model.customer_id();
    t.model.gender();
    t.model.interest_area();
    t.model.interests();
    t.model.date_taken();
  },
});

export const phi_assesment_entriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.phi_assesment_entries();
    t.crud.phi_assesment_entries({ filtering: true, ordering: true });
  },
});

export const phi_assesment_entriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnephi_assesment_entries();
    t.crud.updateOnephi_assesment_entries();
    t.crud.upsertOnephi_assesment_entries();
    t.crud.deleteOnephi_assesment_entries();

    t.crud.updateManyphi_assesment_entries();
    t.crud.deleteManyphi_assesment_entries();
  },
});
