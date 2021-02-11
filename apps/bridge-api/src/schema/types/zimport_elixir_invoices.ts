import { objectType, extendType } from 'nexus';

export const zimport_elixir_invoices = objectType({
  name: 'zimport_elixir_invoices',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.client_name();
    t.model.sum_invoice();
    t.model.mail();
    t.model.mobile();
    t.model.company_name();
  },
});

export const zimport_elixir_invoicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_elixir_invoices();
    t.crud.zimport_elixir_invoices({ filtering: true, ordering: true });
  },
});

export const zimport_elixir_invoicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_elixir_invoices();
    t.crud.updateOnezimport_elixir_invoices();
    t.crud.upsertOnezimport_elixir_invoices();
    t.crud.deleteOnezimport_elixir_invoices();

    t.crud.updateManyzimport_elixir_invoices();
    t.crud.deleteManyzimport_elixir_invoices();
  },
});
