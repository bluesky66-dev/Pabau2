import { objectType, extendType } from 'nexus';

export const gp_details_old = objectType({
  name: 'gp_details_old',
  definition(t) {
    t.model.gp_id();
    t.model.company_id();
    t.model.gp_name();
    t.model.gp_address1();
    t.model.gp_address2();
    t.model.gp_address3();
    t.model.gp_address4();
    t.model.gp_address5();
    t.model.gp_postcode();
    t.model.gp_phone();
    t.model.gp_ratings();
  },
});

export const gp_details_oldQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gp_details_old();
    t.crud.gp_details_olds({ filtering: true, ordering: true });
  },
});

export const gp_details_oldMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegp_details_old();
    t.crud.updateOnegp_details_old();
    t.crud.upsertOnegp_details_old();
    t.crud.deleteOnegp_details_old();

    t.crud.updateManygp_details_old();
    t.crud.deleteManygp_details_old();
  },
});
