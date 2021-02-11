import { objectType, extendType } from 'nexus';

export const inventory_discrepancy = objectType({
  name: 'inventory_discrepancy',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.staff_id();
    t.model.product_id();
    t.model.overage();
    t.model.shortage();
    t.model.count_id();
    t.model.draft();
    t.model.counted();
  },
});

export const inventory_discrepancyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inventory_discrepancy();
    t.crud.inventory_discrepancies({ filtering: true, ordering: true });
  },
});

export const inventory_discrepancyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinventory_discrepancy();
    t.crud.updateOneinventory_discrepancy();
    t.crud.upsertOneinventory_discrepancy();
    t.crud.deleteOneinventory_discrepancy();

    t.crud.updateManyinventory_discrepancy();
    t.crud.deleteManyinventory_discrepancy();
  },
});
