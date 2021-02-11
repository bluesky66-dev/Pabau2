import { objectType, extendType } from 'nexus';

export const voided_sales = objectType({
  name: 'voided_sales',
  definition(t) {
    t.model.id();
    t.model.reference_no();
    t.model.custom_id();
    t.model.biller_name();
    t.model.customer_name();
    t.model.date();
    t.model.reason();
    t.model.inv_total();
    t.model.items();
    t.model.contact_id();
    t.model.insurance_company_id();
    t.model.issuer_id();
    t.model.xero_invoice_id();
    t.model.occupier();
    t.model.xero_updated_date();
    t.model.xero_not_exist();
    t.model.xero_error();
  },
});

export const voided_salesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voided_sales();
    t.crud.voided_sales({ filtering: true, ordering: true });
  },
});

export const voided_salesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevoided_sales();
    t.crud.updateOnevoided_sales();
    t.crud.upsertOnevoided_sales();
    t.crud.deleteOnevoided_sales();

    t.crud.updateManyvoided_sales();
    t.crud.deleteManyvoided_sales();
  },
});
