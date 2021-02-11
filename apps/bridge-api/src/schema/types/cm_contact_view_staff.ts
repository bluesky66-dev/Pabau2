import { objectType, extendType } from 'nexus';

export const cm_contact_view_staff = objectType({
  name: 'cm_contact_view_staff',
  definition(t) {
    t.model.id();
    t.model.view_id();
    t.model.staff_id();
    t.model.company_id();
  },
});

export const cm_contact_view_staffQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contact_view_staff();
    t.crud.cm_contact_view_staffs({ filtering: true, ordering: true });
  },
});

export const cm_contact_view_staffMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contact_view_staff();
    t.crud.updateOnecm_contact_view_staff();
    t.crud.upsertOnecm_contact_view_staff();
    t.crud.deleteOnecm_contact_view_staff();

    t.crud.updateManycm_contact_view_staff();
    t.crud.deleteManycm_contact_view_staff();
  },
});
