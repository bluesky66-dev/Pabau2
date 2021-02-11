import { objectType, extendType } from 'nexus';

export const cm_poll_answer = objectType({
  name: 'cm_poll_answer',
  definition(t) {
    t.model.cm_poll_answer_id();
    t.model.pollId();
    t.model.userId();
    t.model.optionId();
    t.model.time();
  },
});

export const cm_poll_answerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_poll_answer();
    t.crud.cm_poll_answers({ filtering: true, ordering: true });
  },
});

export const cm_poll_answerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_poll_answer();
    t.crud.updateOnecm_poll_answer();
    t.crud.upsertOnecm_poll_answer();
    t.crud.deleteOnecm_poll_answer();

    t.crud.updateManycm_poll_answer();
    t.crud.deleteManycm_poll_answer();
  },
});
