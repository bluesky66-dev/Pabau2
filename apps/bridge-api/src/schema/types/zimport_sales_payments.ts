import { objectType, extendType } from 'nexus';

export const zimport_sales_payments = objectType({
  name: 'zimport_sales_payments',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_sale_id();
    t.model.custom_user_id();
    t.model.custom_user_name();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.amount();
    t.model.paymentMethod();
    t.model.paymentDate();
    t.model.custom_id();
    t.model.added();
    t.model.left_amount();
    t.model.contact_id();
  },
});

export const zimport_sales_paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_sales_payments();
    t.crud.zimport_sales_payments({ filtering: true, ordering: true });
  },
});

export const zimport_sales_paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_sales_payments();
    t.crud.updateOnezimport_sales_payments();
    t.crud.upsertOnezimport_sales_payments();
    t.crud.deleteOnezimport_sales_payments();

    t.crud.updateManyzimport_sales_payments();
    t.crud.deleteManyzimport_sales_payments();
  },
});
