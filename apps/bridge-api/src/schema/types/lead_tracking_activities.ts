import { objectType, extendType } from 'nexus';

export const lead_tracking_activities = objectType({
  name: 'lead_tracking_activities',
  definition(t) {
    t.model.id();
    t.model.mode();
    t.model.occupier();
    t.model.page_url();
    t.model.ip_address();
    t.model.date();
    t.model.description();
    t.model.lead_id();
    t.model.date_updated();
  },
});

export const lead_tracking_activitiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_tracking_activities();
    t.crud.lead_tracking_activities({ filtering: true, ordering: true });
  },
});

export const lead_tracking_activitiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_tracking_activities();
    t.crud.updateOnelead_tracking_activities();
    t.crud.upsertOnelead_tracking_activities();
    t.crud.deleteOnelead_tracking_activities();

    t.crud.updateManylead_tracking_activities();
    t.crud.deleteManylead_tracking_activities();
  },
});
