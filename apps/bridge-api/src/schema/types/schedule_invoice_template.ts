import { objectType, extendType } from 'nexus';

export const schedule_invoice_template = objectType({
  name: 'schedule_invoice_template',
  definition(t) {
    t.model.id();
    t.model.sch_inv_temp_dtl_id();
    t.model.interval_type();
    t.model.day();
    t.model.date();
    t.model.month();
    t.model.year();
    t.model.time();
    t.model.duration();
    t.model.occurance();
    t.model.end_after_occurrences();
    t.model.end_date();
    t.model.occupier();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const schedule_invoice_templateQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.schedule_invoice_template();
    t.crud.schedule_invoice_templates({ filtering: true, ordering: true });
  },
});

export const schedule_invoice_templateMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneschedule_invoice_template();
    t.crud.updateOneschedule_invoice_template();
    t.crud.upsertOneschedule_invoice_template();
    t.crud.deleteOneschedule_invoice_template();

    t.crud.updateManyschedule_invoice_template();
    t.crud.deleteManyschedule_invoice_template();
  },
});
