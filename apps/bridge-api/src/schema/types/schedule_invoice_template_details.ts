import { objectType, extendType } from 'nexus';

export const schedule_invoice_template_details = objectType({
  name: 'schedule_invoice_template_details',
  definition(t) {
    t.model.id();
    t.model.template_name();
    t.model.template_type();
    t.model.terms();
    t.model.all_amounts_are();
    t.model.is_vat();
    t.model.discount();
    t.model.customer_message();
    t.model.memo();
    t.model.to_be_emailed();
    t.model.occupier();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const schedule_invoice_template_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.schedule_invoice_template_details();
    t.crud.schedule_invoice_template_details({ filtering: true, ordering: true });
  },
});

export const schedule_invoice_template_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneschedule_invoice_template_details();
    t.crud.updateOneschedule_invoice_template_details();
    t.crud.upsertOneschedule_invoice_template_details();
    t.crud.deleteOneschedule_invoice_template_details();

    t.crud.updateManyschedule_invoice_template_details();
    t.crud.deleteManyschedule_invoice_template_details();
  },
});
