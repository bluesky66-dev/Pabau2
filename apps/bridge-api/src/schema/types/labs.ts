import { objectType, extendType } from 'nexus';

export const labs = objectType({
  name: 'labs',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.is_active();
    t.model.lab_name();
    t.model.lab_email();
    t.model.lab_street();
    t.model.lab_street2();
    t.model.lab_city();
    t.model.lab_county();
    t.model.lab_postal();
    t.model.lab_phone();
    t.model.lab_provider_no();
  },
});

export const labsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.labs();
    t.crud.labs({ filtering: true, ordering: true });
  },
});

export const labsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelabs();
    t.crud.updateOnelabs();
    t.crud.upsertOnelabs();
    t.crud.deleteOnelabs();

    t.crud.updateManylabs();
    t.crud.deleteManylabs();
  },
});
