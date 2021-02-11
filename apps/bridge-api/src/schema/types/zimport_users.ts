import { objectType, extendType } from 'nexus';

export const zimport_users = objectType({
  name: 'zimport_users',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.name();
    t.model.email();
    t.model.is_active();
  },
});

export const zimport_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_users();
    t.crud.zimport_users({ filtering: true, ordering: true });
  },
});

export const zimport_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_users();
    t.crud.updateOnezimport_users();
    t.crud.upsertOnezimport_users();
    t.crud.deleteOnezimport_users();

    t.crud.updateManyzimport_users();
    t.crud.deleteManyzimport_users();
  },
});
