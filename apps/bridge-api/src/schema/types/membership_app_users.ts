import { objectType, extendType } from 'nexus';

export const membership_app_users = objectType({
  name: 'membership_app_users',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.membership_id();
    t.model.company_id();
  },
});

export const membership_app_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.membership_app_users();
    t.crud.membership_app_users({ filtering: true, ordering: true });
  },
});

export const membership_app_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemembership_app_users();
    t.crud.updateOnemembership_app_users();
    t.crud.upsertOnemembership_app_users();
    t.crud.deleteOnemembership_app_users();

    t.crud.updateManymembership_app_users();
    t.crud.deleteManymembership_app_users();
  },
});
