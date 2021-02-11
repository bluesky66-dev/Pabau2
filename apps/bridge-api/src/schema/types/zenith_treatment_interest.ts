import { objectType, extendType } from 'nexus';

export const zenith_treatment_interest = objectType({
  name: 'zenith_treatment_interest',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.treatment_interest();
  },
});

export const zenith_treatment_interestQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zenith_treatment_interest();
    t.crud.zenith_treatment_interests({ filtering: true, ordering: true });
  },
});

export const zenith_treatment_interestMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezenith_treatment_interest();
    t.crud.updateOnezenith_treatment_interest();
    t.crud.upsertOnezenith_treatment_interest();
    t.crud.deleteOnezenith_treatment_interest();

    t.crud.updateManyzenith_treatment_interest();
    t.crud.deleteManyzenith_treatment_interest();
  },
});
