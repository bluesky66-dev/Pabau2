import { objectType, extendType } from 'nexus';

export const tab_bills = objectType({
  name: 'tab_bills',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.customer_id();
    t.model.table_no();
    t.model.count();
    t.model.tax1();
    t.model.tax2();
    t.model.total();
    t.model.occupier();
    t.model.uid();
  },
});

export const tab_billsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tab_bills();
    t.crud.tab_bills({ filtering: true, ordering: true });
  },
});

export const tab_billsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetab_bills();
    t.crud.updateOnetab_bills();
    t.crud.upsertOnetab_bills();
    t.crud.deleteOnetab_bills();

    t.crud.updateManytab_bills();
    t.crud.deleteManytab_bills();
  },
});
