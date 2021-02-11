import { objectType, extendType } from 'nexus';

export const waiting_list_preferences = objectType({
  name: 'waiting_list_preferences',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.employee_id();
    t.model.company_id();
    t.model.waiting_list_id();
  },
});

export const waiting_list_preferencesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_list_preferences();
    t.crud.waiting_list_preferences({ filtering: true, ordering: true });
  },
});

export const waiting_list_preferencesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_list_preferences();
    t.crud.updateOnewaiting_list_preferences();
    t.crud.upsertOnewaiting_list_preferences();
    t.crud.deleteOnewaiting_list_preferences();

    t.crud.updateManywaiting_list_preferences();
    t.crud.deleteManywaiting_list_preferences();
  },
});
