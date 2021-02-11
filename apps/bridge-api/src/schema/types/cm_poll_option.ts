import { objectType, extendType } from 'nexus';

export const cm_poll_option = objectType({
  name: 'cm_poll_option',
  definition(t) {
    t.model.ID();
    t.model.pollId();
    t.model.Answer();
  },
});

export const cm_poll_optionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_poll_option();
    t.crud.cm_poll_options({ filtering: true, ordering: true });
  },
});

export const cm_poll_optionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_poll_option();
    t.crud.updateOnecm_poll_option();
    t.crud.upsertOnecm_poll_option();
    t.crud.deleteOnecm_poll_option();

    t.crud.updateManycm_poll_option();
    t.crud.deleteManycm_poll_option();
  },
});
