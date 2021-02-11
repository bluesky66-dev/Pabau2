import { objectType, extendType } from 'nexus';

export const gp_details_temp = objectType({
  name: 'gp_details_temp',
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

export const gp_details_tempQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gp_details_temp();
    t.crud.gp_details_temps({ filtering: true, ordering: true });
  },
});

export const gp_details_tempMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegp_details_temp();
    t.crud.updateOnegp_details_temp();
    t.crud.upsertOnegp_details_temp();
    t.crud.deleteOnegp_details_temp();

    t.crud.updateManygp_details_temp();
    t.crud.deleteManygp_details_temp();
  },
});
