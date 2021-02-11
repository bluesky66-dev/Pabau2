import { objectType, extendType } from 'nexus';

export const lead_tracking = objectType({
  name: 'lead_tracking',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.ip_address();
  },
});

export const lead_trackingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_tracking();
    t.crud.lead_trackings({ filtering: true, ordering: true });
  },
});

export const lead_trackingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_tracking();
    t.crud.updateOnelead_tracking();
    t.crud.upsertOnelead_tracking();
    t.crud.deleteOnelead_tracking();

    t.crud.updateManylead_tracking();
    t.crud.deleteManylead_tracking();
  },
});
