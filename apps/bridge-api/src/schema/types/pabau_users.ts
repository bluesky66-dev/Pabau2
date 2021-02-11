import { objectType, extendType } from 'nexus';

export const pabau_users = objectType({
  name: 'pabau_users',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.password();
    t.model.is_trainer();
    t.model.is_admin();
    t.model.is_onboarder();
    t.model.slack_id();
  },
});

export const pabau_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_users();
    t.crud.pabau_users({ filtering: true, ordering: true });
  },
});

export const pabau_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_users();
    t.crud.updateOnepabau_users();
    t.crud.upsertOnepabau_users();
    t.crud.deleteOnepabau_users();

    t.crud.updateManypabau_users();
    t.crud.deleteManypabau_users();
  },
});
