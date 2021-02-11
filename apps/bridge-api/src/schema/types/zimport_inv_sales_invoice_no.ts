import { objectType, extendType } from 'nexus';

export const zimport_inv_sales_invoice_no = objectType({
  name: 'zimport_inv_sales_invoice_no',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_sale_id();
    t.model.ref_no();
    t.model.custom_contact_id();
    t.model.added();
  },
});

export const zimport_inv_sales_invoice_noQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_inv_sales_invoice_no();
    t.crud.zimport_inv_sales_invoice_nos({ filtering: true, ordering: true });
  },
});

export const zimport_inv_sales_invoice_noMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_inv_sales_invoice_no();
    t.crud.updateOnezimport_inv_sales_invoice_no();
    t.crud.upsertOnezimport_inv_sales_invoice_no();
    t.crud.deleteOnezimport_inv_sales_invoice_no();

    t.crud.updateManyzimport_inv_sales_invoice_no();
    t.crud.deleteManyzimport_inv_sales_invoice_no();
  },
});
