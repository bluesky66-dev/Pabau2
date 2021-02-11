import { objectType, extendType } from 'nexus';

export const inventory_count = objectType({
  name: 'inventory_count',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.staff_id();
    t.model.date_started();
    t.model.date_committed();
    t.model.date_completed();
    t.model.notes();
    t.model.count_type();
    t.model.count_name();
    t.model.status();
    t.model.counting_categories();
    t.model.location_id();
  },
});

export const inventory_countQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inventory_count();
    t.crud.inventory_counts({ filtering: true, ordering: true });
  },
});

export const inventory_countMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinventory_count();
    t.crud.updateOneinventory_count();
    t.crud.upsertOneinventory_count();
    t.crud.deleteOneinventory_count();

    t.crud.updateManyinventory_count();
    t.crud.deleteManyinventory_count();
  },
});
