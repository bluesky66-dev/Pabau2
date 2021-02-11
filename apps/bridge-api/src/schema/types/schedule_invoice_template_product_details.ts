import { objectType, extendType } from 'nexus';

export const schedule_invoice_template_product_details = objectType({
  name: 'schedule_invoice_template_product_details',
  definition(t) {
    t.model.id();
    t.model.sch_inv_temp_dtl_id();
    t.model.invoice_to();
    t.model.product_id();
    t.model.description();
    t.model.qty();
    t.model.unite_price();
  },
});

export const schedule_invoice_template_product_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.schedule_invoice_template_product_details();
    t.crud.schedule_invoice_template_product_details({ filtering: true, ordering: true });
  },
});

export const schedule_invoice_template_product_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneschedule_invoice_template_product_details();
    t.crud.updateOneschedule_invoice_template_product_details();
    t.crud.upsertOneschedule_invoice_template_product_details();
    t.crud.deleteOneschedule_invoice_template_product_details();

    t.crud.updateManyschedule_invoice_template_product_details();
    t.crud.deleteManyschedule_invoice_template_product_details();
  },
});
