import { objectType, extendType } from 'nexus';

export const zpatient_dobs = objectType({
  name: 'zpatient_dobs',
  definition(t) {
    t.model.id();
    t.model.custom_contact_id();
    t.model.dob();
    t.model.occupier();
  },
});

export const zpatient_dobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zpatient_dobs();
    t.crud.zpatient_dobs({ filtering: true, ordering: true });
  },
});

export const zpatient_dobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezpatient_dobs();
    t.crud.updateOnezpatient_dobs();
    t.crud.upsertOnezpatient_dobs();
    t.crud.deleteOnezpatient_dobs();

    t.crud.updateManyzpatient_dobs();
    t.crud.deleteManyzpatient_dobs();
  },
});
