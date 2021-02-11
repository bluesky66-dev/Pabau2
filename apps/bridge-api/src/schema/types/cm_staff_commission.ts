import { objectType, extendType } from 'nexus';

export const cm_staff_commission = objectType({
  name: 'cm_staff_commission',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.staff_id();
    t.model.pabau_id();
    t.model.employee_name();
    t.model.commission_type();
    t.model.tier_1_from();
    t.model.tier_1_to();
    t.model.tier_1_percent();
    t.model.tier_2_from();
    t.model.tier_2_to();
    t.model.tier_2_percent();
    t.model.tier_3_from();
    t.model.tier_3_to();
    t.model.tier_3_percent();
    t.model.tier_4_from();
    t.model.tier_4_to();
    t.model.tier_4_percent();
    t.model.tier_5_from();
    t.model.tier_5_to();
    t.model.tier_5_percent();
  },
});

export const cm_staff_commissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_commission();
    t.crud.cm_staff_commissions({ filtering: true, ordering: true });
  },
});

export const cm_staff_commissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_commission();
    t.crud.updateOnecm_staff_commission();
    t.crud.upsertOnecm_staff_commission();
    t.crud.deleteOnecm_staff_commission();

    t.crud.updateManycm_staff_commission();
    t.crud.deleteManycm_staff_commission();
  },
});
