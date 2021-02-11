import { objectType, extendType } from 'nexus';

export const gp_details = objectType({
  name: 'gp_details',
  definition(t) {
    t.model.gp_id();
    t.model.company_id();
    t.model.gp_name();
    t.model.gp_surgery();
    t.model.gp_address1();
    t.model.gp_address2();
    t.model.gp_address3();
    t.model.gp_address4();
    t.model.gp_address5();
    t.model.gp_postcode();
    t.model.gp_email();
    t.model.gp_phone();
    t.model.gp_ratings();
  },
});

export const gp_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gp_details();
    t.crud.gp_details({ filtering: true, ordering: true });
  },
});

export const gp_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegp_details();
    t.crud.updateOnegp_details();
    t.crud.upsertOnegp_details();
    t.crud.deleteOnegp_details();

    t.crud.updateManygp_details();
    t.crud.deleteManygp_details();
  },
});
