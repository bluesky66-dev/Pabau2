import { objectType, extendType } from 'nexus';

export const cm_poll = objectType({
  name: 'cm_poll',
  definition(t) {
    t.model.ID();
    t.model.Question();
  },
});

export const cm_pollQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_poll();
    t.crud.cm_polls({ filtering: true, ordering: true });
  },
});

export const cm_pollMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_poll();
    t.crud.updateOnecm_poll();
    t.crud.upsertOnecm_poll();
    t.crud.deleteOnecm_poll();

    t.crud.updateManycm_poll();
    t.crud.deleteManycm_poll();
  },
});
