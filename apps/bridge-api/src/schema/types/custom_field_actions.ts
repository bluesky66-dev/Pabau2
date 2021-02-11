import { objectType, extendType } from 'nexus';

export const custom_field_actions = objectType({
  name: 'custom_field_actions',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.custom_field_id();
    t.model.action_name();
    t.model.trigger_value();
    t.model.template_id();
    t.model.additional_data();
  },
});

export const custom_field_actionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.custom_field_actions();
    t.crud.custom_field_actions({ filtering: true, ordering: true });
  },
});

export const custom_field_actionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustom_field_actions();
    t.crud.updateOnecustom_field_actions();
    t.crud.upsertOnecustom_field_actions();
    t.crud.deleteOnecustom_field_actions();

    t.crud.updateManycustom_field_actions();
    t.crud.deleteManycustom_field_actions();
  },
});
