import { objectType, extendType } from 'nexus';

export const lead_capture_automated = objectType({
  name: 'lead_capture_automated',
  definition(t) {
    t.model.id();
    t.model.custom_field();
    t.model.capture_form_id();
    t.model.from_email();
    t.model.template_id();
    t.model.occupier();
  },
});

export const lead_capture_automatedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_capture_automated();
    t.crud.lead_capture_automateds({ filtering: true, ordering: true });
  },
});

export const lead_capture_automatedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_capture_automated();
    t.crud.updateOnelead_capture_automated();
    t.crud.upsertOnelead_capture_automated();
    t.crud.deleteOnelead_capture_automated();

    t.crud.updateManylead_capture_automated();
    t.crud.deleteManylead_capture_automated();
  },
});
