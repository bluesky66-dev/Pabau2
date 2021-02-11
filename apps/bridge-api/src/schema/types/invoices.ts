import { objectType, extendType } from 'nexus';

export const invoices = objectType({
  name: 'invoices',
  definition(t) {
    t.model.id();
    t.model.client_name();
    t.model.client_email();
    t.model.client_phone();
    t.model.client_address();
    t.model.client_location();
    t.model.payment_method();
    t.model.vat();
    t.model.total();
    t.model.currency();
    t.model.date();
    t.model.occupier();
    t.model.ref();
    t.model.due_date();
    t.model.deposit();
  },
});

export const invoicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoices();
    t.crud.invoices({ filtering: true, ordering: true });
  },
});

export const invoicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoices();
    t.crud.updateOneinvoices();
    t.crud.upsertOneinvoices();
    t.crud.deleteOneinvoices();

    t.crud.updateManyinvoices();
    t.crud.deleteManyinvoices();
  },
});
