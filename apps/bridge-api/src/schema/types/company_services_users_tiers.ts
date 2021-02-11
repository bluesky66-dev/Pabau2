import { objectType, extendType } from 'nexus';

export const company_services_users_tiers = objectType({
  name: 'company_services_users_tiers',
  definition(t) {
    t.model.id();
    t.model.service_id();
    t.model.user_id();
    t.model.company_id();
    t.model.price();
    t.model.duration();
    t.model.staff_commission();
    t.model.participant_commission();
  },
});

export const company_services_users_tiersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_users_tiers();
    t.crud.company_services_users_tiers({ filtering: true, ordering: true });
  },
});

export const company_services_users_tiersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_users_tiers();
    t.crud.updateOnecompany_services_users_tiers();
    t.crud.upsertOnecompany_services_users_tiers();
    t.crud.deleteOnecompany_services_users_tiers();

    t.crud.updateManycompany_services_users_tiers();
    t.crud.deleteManycompany_services_users_tiers();
  },
});
