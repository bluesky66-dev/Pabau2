import { objectType, extendType } from 'nexus';

export const medical_form_contact_history = objectType({
  name: 'medical_form_contact_history',
  definition(t) {
    t.model.id();
    t.model.mode();
    t.model.medical_form_contact_id();
    t.model.user_id();
    t.model.contact_id();
    t.model.occupier();
    t.model.date();
    t.model.update_changes();
  },
});

export const medical_form_contact_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_contact_history();
    t.crud.medical_form_contact_histories({ filtering: true, ordering: true });
  },
});

export const medical_form_contact_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_contact_history();
    t.crud.updateOnemedical_form_contact_history();
    t.crud.upsertOnemedical_form_contact_history();
    t.crud.deleteOnemedical_form_contact_history();

    t.crud.updateManymedical_form_contact_history();
    t.crud.deleteManymedical_form_contact_history();
  },
});
