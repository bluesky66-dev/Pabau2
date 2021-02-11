import { objectType, extendType } from 'nexus';

export const zimport_sales_payments_deleted = objectType({
  name: 'zimport_sales_payments_deleted',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.paymentDate();
  },
});

export const zimport_sales_payments_deletedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_sales_payments_deleted();
    t.crud.zimport_sales_payments_deleteds({ filtering: true, ordering: true });
  },
});

export const zimport_sales_payments_deletedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_sales_payments_deleted();
    t.crud.updateOnezimport_sales_payments_deleted();
    t.crud.upsertOnezimport_sales_payments_deleted();
    t.crud.deleteOnezimport_sales_payments_deleted();

    t.crud.updateManyzimport_sales_payments_deleted();
    t.crud.deleteManyzimport_sales_payments_deleted();
  },
});
