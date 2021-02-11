import { objectType, extendType } from 'nexus';

export const sales_pitches = objectType({
  name: 'sales_pitches',
  definition(t) {
    t.model.id();
    t.model.pitch_name();
    t.model.pitch_description();
    t.model.pitch_type();
    t.model.company_id();
    t.model.created_time();
  },
});

export const sales_pitchesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sales_pitches();
    t.crud.sales_pitches({ filtering: true, ordering: true });
  },
});

export const sales_pitchesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesales_pitches();
    t.crud.updateOnesales_pitches();
    t.crud.upsertOnesales_pitches();
    t.crud.deleteOnesales_pitches();

    t.crud.updateManysales_pitches();
    t.crud.deleteManysales_pitches();
  },
});
