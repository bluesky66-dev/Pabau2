import { objectType, extendType } from 'nexus';

export const rd_party_access = objectType({
  name: 'rd_party_access',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.company_name();
    t.model.email();
    t.model.passcode();
    t.model.first_name();
    t.model.last_name();
    t.model.logo();
    t.model.access_id();
  },
});

export const rd_party_accessQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rd_party_access();
    t.crud.rd_party_accesses({ filtering: true, ordering: true });
  },
});

export const rd_party_accessMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerd_party_access();
    t.crud.updateOnerd_party_access();
    t.crud.upsertOnerd_party_access();
    t.crud.deleteOnerd_party_access();

    t.crud.updateManyrd_party_access();
    t.crud.deleteManyrd_party_access();
  },
});
