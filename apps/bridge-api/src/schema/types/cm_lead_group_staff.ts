import { objectType, extendType } from 'nexus';

export const cm_lead_group_staff = objectType({
  name: 'cm_lead_group_staff',
  definition(t) {
    t.model.id();
    t.model.group_id();
    t.model.staff_id();
    t.model.company_id();
  },
});

export const cm_lead_group_staffQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_lead_group_staff();
    t.crud.cm_lead_group_staffs({ filtering: true, ordering: true });
  },
});

export const cm_lead_group_staffMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_lead_group_staff();
    t.crud.updateOnecm_lead_group_staff();
    t.crud.upsertOnecm_lead_group_staff();
    t.crud.deleteOnecm_lead_group_staff();

    t.crud.updateManycm_lead_group_staff();
    t.crud.deleteManycm_lead_group_staff();
  },
});
