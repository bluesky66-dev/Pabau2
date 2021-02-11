import { objectType, extendType } from 'nexus';

export const manage_bills = objectType({
  name: 'manage_bills',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.customer_id();
    t.model.customer_name();
    t.model.biller_id();
    t.model.biller_name();
    t.model.count();
    t.model.tax1();
    t.model.tax2();
    t.model.total();
  },
});

export const manage_billsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_bills();
    t.crud.manage_bills({ filtering: true, ordering: true });
  },
});

export const manage_billsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_bills();
    t.crud.updateOnemanage_bills();
    t.crud.upsertOnemanage_bills();
    t.crud.deleteOnemanage_bills();

    t.crud.updateManymanage_bills();
    t.crud.deleteManymanage_bills();
  },
});
