import { objectType, extendType } from 'nexus';

export const lead_status_array = objectType({
  name: 'lead_status_array',
  definition(t) {
    t.model.id();
    t.model.status_name();
  },
});

export const lead_status_arrayQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_status_array();
    t.crud.lead_status_arrays({ filtering: true, ordering: true });
  },
});

export const lead_status_arrayMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_status_array();
    t.crud.updateOnelead_status_array();
    t.crud.upsertOnelead_status_array();
    t.crud.deleteOnelead_status_array();

    t.crud.updateManylead_status_array();
    t.crud.deleteManylead_status_array();
  },
});
