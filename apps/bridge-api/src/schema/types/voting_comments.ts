import { objectType, extendType } from 'nexus';

export const voting_comments = objectType({
  name: 'voting_comments',
  definition(t) {
    t.model.id();
    t.model.voting_id();
    t.model.comment();
    t.model.occupier();
    t.model.user_id();
    t.model.datetime();
  },
});

export const voting_commentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voting_comments();
    t.crud.voting_comments({ filtering: true, ordering: true });
  },
});

export const voting_commentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevoting_comments();
    t.crud.updateOnevoting_comments();
    t.crud.upsertOnevoting_comments();
    t.crud.deleteOnevoting_comments();

    t.crud.updateManyvoting_comments();
    t.crud.deleteManyvoting_comments();
  },
});
