import { objectType, extendType } from 'nexus';

export const customer_users = objectType({
  name: 'customer_users',
  definition(t) {
    t.model.id();
    t.model.firstname();
    t.model.lastname();
    t.model.username();
    t.model.password();
    t.model.date();
    t.model.type();
    t.model.city();
    t.model.gender();
    t.model.dob();
    t.model.mobile();
    t.model.active();
    t.model.country();
    t.model.uid();
    t.model.fb_active();
    t.model.companyid();
  },
});

export const customer_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customer_users();
    t.crud.customer_users({ filtering: true, ordering: true });
  },
});

export const customer_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomer_users();
    t.crud.updateOnecustomer_users();
    t.crud.upsertOnecustomer_users();
    t.crud.deleteOnecustomer_users();

    t.crud.updateManycustomer_users();
    t.crud.deleteManycustomer_users();
  },
});
