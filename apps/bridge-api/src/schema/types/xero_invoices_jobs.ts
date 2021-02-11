import { objectType, extendType } from 'nexus';

export const xero_invoices_jobs = objectType({
  name: 'xero_invoices_jobs',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.xero_manual_job_id();
    t.model.mode();
    t.model.invoice_id();
    t.model.invoice_guid();
    t.model.xero_synced();
    t.model.date_created();
    t.model.xero_updated_date();
    t.model.result_text();
    t.model.xero_error();
    t.model.custom_id();
    t.model.force();
    t.model.counter();
  },
});

export const xero_invoices_jobsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_invoices_jobs();
    t.crud.xero_invoices_jobs({ filtering: true, ordering: true });
  },
});

export const xero_invoices_jobsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_invoices_jobs();
    t.crud.updateOnexero_invoices_jobs();
    t.crud.upsertOnexero_invoices_jobs();
    t.crud.deleteOnexero_invoices_jobs();

    t.crud.updateManyxero_invoices_jobs();
    t.crud.deleteManyxero_invoices_jobs();
  },
});
