import { objectType, extendType } from 'nexus';

export const selected_profiles_compose_message = objectType({
  name: 'selected_profiles_compose_message',
  definition(t) {
    t.model.id();
    t.model.main();
    t.model.other();
    t.model.uid();
    t.model.timestamp();
  },
});

export const selected_profiles_compose_messageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.selected_profiles_compose_message();
    t.crud.selected_profiles_compose_messages({ filtering: true, ordering: true });
  },
});

export const selected_profiles_compose_messageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneselected_profiles_compose_message();
    t.crud.updateOneselected_profiles_compose_message();
    t.crud.upsertOneselected_profiles_compose_message();
    t.crud.deleteOneselected_profiles_compose_message();

    t.crud.updateManyselected_profiles_compose_message();
    t.crud.deleteManyselected_profiles_compose_message();
  },
});
