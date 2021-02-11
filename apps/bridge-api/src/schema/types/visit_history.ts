import { objectType, extendType } from 'nexus';

export const visit_history = objectType({
  name: 'visit_history',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.datetime();
    t.model.company_id();
    t.model.visit_type();
  },
});

export const visit_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.visit_history();
    t.crud.visit_histories({ filtering: true, ordering: true });
  },
});

export const visit_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevisit_history();
    t.crud.updateOnevisit_history();
    t.crud.upsertOnevisit_history();
    t.crud.deleteOnevisit_history();

    t.crud.updateManyvisit_history();
    t.crud.deleteManyvisit_history();
  },
});
