import { objectType, extendType } from 'nexus';

export const user_contact_access = objectType({
  name: 'user_contact_access',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.contact_id();
    t.model.access_date();
  },
});

export const user_contact_accessQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_contact_access();
    t.crud.user_contact_accesses({ filtering: true, ordering: true });
  },
});

export const user_contact_accessMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_contact_access();
    t.crud.updateOneuser_contact_access();
    t.crud.upsertOneuser_contact_access();
    t.crud.deleteOneuser_contact_access();

    t.crud.updateManyuser_contact_access();
    t.crud.deleteManyuser_contact_access();
  },
});
