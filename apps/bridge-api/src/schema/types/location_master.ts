import { objectType, extendType } from 'nexus';

export const location_master = objectType({
  name: 'location_master',
  definition(t) {
    t.model.loc_id();
    t.model.loc_comp_id();
    t.model.loc_name();
    t.model.loc_date();
  },
});

export const location_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.location_master();
    t.crud.location_masters({ filtering: true, ordering: true });
  },
});

export const location_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelocation_master();
    t.crud.updateOnelocation_master();
    t.crud.upsertOnelocation_master();
    t.crud.deleteOnelocation_master();

    t.crud.updateManylocation_master();
    t.crud.deleteManylocation_master();
  },
});
