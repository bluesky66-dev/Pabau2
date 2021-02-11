import { objectType, extendType } from 'nexus';

export const tokens = objectType({
  name: 'tokens',
  definition(t) {
    t.model.uid();
    t.model.push_token();
    t.model.deviceos();
  },
});

export const tokensQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tokens();
    t.crud.tokens({ filtering: true, ordering: true });
  },
});

export const tokensMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetokens();
    t.crud.updateOnetokens();
    t.crud.upsertOnetokens();
    t.crud.deleteOnetokens();

    t.crud.updateManytokens();
    t.crud.deleteManytokens();
  },
});
