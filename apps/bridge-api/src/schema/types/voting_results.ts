import { objectType, extendType } from 'nexus';

export const voting_results = objectType({
  name: 'voting_results',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.title();
    t.model.description();
    t.model.datetime();
    t.model.score();
    t.model.up_vote();
    t.model.down_vote();
    t.model.buzz_id();
  },
});

export const voting_resultsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voting_results();
    t.crud.voting_results({ filtering: true, ordering: true });
  },
});

export const voting_resultsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevoting_results();
    t.crud.updateOnevoting_results();
    t.crud.upsertOnevoting_results();
    t.crud.deleteOnevoting_results();

    t.crud.updateManyvoting_results();
    t.crud.deleteManyvoting_results();
  },
});
