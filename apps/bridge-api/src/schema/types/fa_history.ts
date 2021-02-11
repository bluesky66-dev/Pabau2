import { objectType, extendType } from 'nexus';

export const fa_history = objectType({
  name: 'fa_history',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.passcode();
    t.model.user_id();
    t.model.request_date();
    t.model.is_confirmed();
  },
});

export const fa_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fa_history();
    t.crud.fa_histories({ filtering: true, ordering: true });
  },
});

export const fa_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefa_history();
    t.crud.updateOnefa_history();
    t.crud.upsertOnefa_history();
    t.crud.deleteOnefa_history();

    t.crud.updateManyfa_history();
    t.crud.deleteManyfa_history();
  },
});
