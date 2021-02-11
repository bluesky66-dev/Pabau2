import { objectType, extendType } from 'nexus';

export const fingerprints_users = objectType({
  name: 'fingerprints_users',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.fingerprint();
    t.model.enrolled();
    t.model.last_scanned();
  },
});

export const fingerprints_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fingerprints_users();
    t.crud.fingerprints_users({ filtering: true, ordering: true });
  },
});

export const fingerprints_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefingerprints_users();
    t.crud.updateOnefingerprints_users();
    t.crud.upsertOnefingerprints_users();
    t.crud.deleteOnefingerprints_users();

    t.crud.updateManyfingerprints_users();
    t.crud.deleteManyfingerprints_users();
  },
});
