import { objectType, extendType } from 'nexus';

export const nhs_locum = objectType({
  name: 'nhs_locum',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.date_login();
  },
});

export const nhs_locumQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_locum();
    t.crud.nhs_locums({ filtering: true, ordering: true });
  },
});

export const nhs_locumMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_locum();
    t.crud.updateOnenhs_locum();
    t.crud.upsertOnenhs_locum();
    t.crud.deleteOnenhs_locum();

    t.crud.updateManynhs_locum();
    t.crud.deleteManynhs_locum();
  },
});
