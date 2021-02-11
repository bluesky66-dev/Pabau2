import { objectType, extendType } from 'nexus';

export const rate_limiter = objectType({
  name: 'rate_limiter',
  definition(t) {
    t.model.ip();
    t.model.count();
    t.model.last_access();
  },
});

export const rate_limiterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rate_limiter();
    t.crud.rate_limiters({ filtering: true, ordering: true });
  },
});

export const rate_limiterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerate_limiter();
    t.crud.updateOnerate_limiter();
    t.crud.upsertOnerate_limiter();
    t.crud.deleteOnerate_limiter();

    t.crud.updateManyrate_limiter();
    t.crud.deleteManyrate_limiter();
  },
});
