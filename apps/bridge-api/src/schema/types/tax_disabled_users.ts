import { objectType, extendType } from 'nexus';

export const tax_disabled_users = objectType({
  name: 'tax_disabled_users',
  definition(t) {
    t.model.id();
    t.model.tax_id();
    t.model.user_id();
  },
});

export const tax_disabled_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tax_disabled_users();
    t.crud.tax_disabled_users({ filtering: true, ordering: true });
  },
});

export const tax_disabled_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetax_disabled_users();
    t.crud.updateOnetax_disabled_users();
    t.crud.upsertOnetax_disabled_users();
    t.crud.deleteOnetax_disabled_users();

    t.crud.updateManytax_disabled_users();
    t.crud.deleteManytax_disabled_users();
  },
});
