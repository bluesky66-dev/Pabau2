import { objectType, extendType } from 'nexus';

export const waiting_list_options = objectType({
  name: 'waiting_list_options',
  definition(t) {
    t.model.id();
    t.model.waiting_list_id();
    t.model.options();
  },
});

export const waiting_list_optionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_list_options();
    t.crud.waiting_list_options({ filtering: true, ordering: true });
  },
});

export const waiting_list_optionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_list_options();
    t.crud.updateOnewaiting_list_options();
    t.crud.upsertOnewaiting_list_options();
    t.crud.deleteOnewaiting_list_options();

    t.crud.updateManywaiting_list_options();
    t.crud.deleteManywaiting_list_options();
  },
});
