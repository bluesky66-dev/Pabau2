import { objectType, extendType } from 'nexus';

export const gocardless_events = objectType({
  name: 'gocardless_events',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.amount();
    t.model.payment_status();
    t.model.dtime();
    t.model.gc_email();
    t.model.payment_id();
    t.model.after_bank_transver();
    t.model.sale_id();
    t.model.event_data();
  },
});

export const gocardless_eventsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_events();
    t.crud.gocardless_events({ filtering: true, ordering: true });
  },
});

export const gocardless_eventsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_events();
    t.crud.updateOnegocardless_events();
    t.crud.upsertOnegocardless_events();
    t.crud.deleteOnegocardless_events();

    t.crud.updateManygocardless_events();
    t.crud.deleteManygocardless_events();
  },
});
