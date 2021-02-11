import { objectType, extendType } from 'nexus';

export const zenith_treatment_interest_divided = objectType({
  name: 'zenith_treatment_interest_divided',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.treatment_interest();
    t.model.added();
  },
});

export const zenith_treatment_interest_dividedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zenith_treatment_interest_divided();
    t.crud.zenith_treatment_interest_divideds({ filtering: true, ordering: true });
  },
});

export const zenith_treatment_interest_dividedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezenith_treatment_interest_divided();
    t.crud.updateOnezenith_treatment_interest_divided();
    t.crud.upsertOnezenith_treatment_interest_divided();
    t.crud.deleteOnezenith_treatment_interest_divided();

    t.crud.updateManyzenith_treatment_interest_divided();
    t.crud.deleteManyzenith_treatment_interest_divided();
  },
});
