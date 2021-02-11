import { objectType, extendType } from 'nexus';

export const insurance_details = objectType({
  name: 'insurance_details',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.insurer_name();
    t.model.phone();
    t.model.website();
    t.model.city();
    t.model.street();
    t.model.county();
    t.model.post_code();
    t.model.email();
    t.model.is_active();
    t.model.image();
    t.model.country();
    t.model.street2();
    t.model.provider_no();
    t.model.imported();
    t.model.healthcode_id();
    t.model.cycle_quantity();
    t.model.custom_id();
    t.model.company_type();
    t.model.hc_identifier();
    t.model.xero_contact_id();
  },
});

export const insurance_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.insurance_details();
    t.crud.insurance_details({ filtering: true, ordering: true });
  },
});

export const insurance_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinsurance_details();
    t.crud.updateOneinsurance_details();
    t.crud.upsertOneinsurance_details();
    t.crud.deleteOneinsurance_details();

    t.crud.updateManyinsurance_details();
    t.crud.deleteManyinsurance_details();
  },
});
