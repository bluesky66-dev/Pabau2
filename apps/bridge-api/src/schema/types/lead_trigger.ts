import { objectType, extendType } from 'nexus';

export const lead_trigger = objectType({
  name: 'lead_trigger',
  definition(t) {
    t.model.id();
    t.model.trigger_name();
    t.model.field_id();
    t.model.field_value();
    t.model.location_id();
    t.model.assigned_to_1();
    t.model.assigned_to_2();
    t.model.company_id();
    t.model.round_robin();
    t.model.source_id();
    t.model.postcode();
  },
});

export const lead_triggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_trigger();
    t.crud.lead_triggers({ filtering: true, ordering: true });
  },
});

export const lead_triggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_trigger();
    t.crud.updateOnelead_trigger();
    t.crud.upsertOnelead_trigger();
    t.crud.deleteOnelead_trigger();

    t.crud.updateManylead_trigger();
    t.crud.deleteManylead_trigger();
  },
});
