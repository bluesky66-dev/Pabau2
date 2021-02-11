import { objectType, extendType } from 'nexus';

export const quotation_users = objectType({
  name: 'quotation_users',
  definition(t) {
    t.model.id();
    t.model.first_name();
    t.model.last_name();
    t.model.email();
    t.model.phone();
    t.model.company_name();
    t.model.country();
    t.model.subscription_plan_name();
    t.model.subscription_plan_price();
    t.model.support_plan_name();
    t.model.support_price();
    t.model.education_plan_name();
    t.model.education_plan_price();
    t.model.migration_plan_name();
    t.model.migration_plan_price();
    t.model.upfront_payment();
    t.model.sub_discount();
    t.model.sup_discount();
    t.model.edu_discount();
    t.model.set_discount();
    t.model.previous_system();
  },
});

export const quotation_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.quotation_users();
    t.crud.quotation_users({ filtering: true, ordering: true });
  },
});

export const quotation_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnequotation_users();
    t.crud.updateOnequotation_users();
    t.crud.upsertOnequotation_users();
    t.crud.deleteOnequotation_users();

    t.crud.updateManyquotation_users();
    t.crud.deleteManyquotation_users();
  },
});
