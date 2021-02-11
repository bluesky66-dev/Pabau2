import { objectType, extendType } from 'nexus';

export const supplier_category = objectType({
  name: 'supplier_category',
  definition(t) {
    t.model.id();
    t.model.category_name();
    t.model.company_id();
  },
});

export const supplier_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.supplier_category();
    t.crud.supplier_categories({ filtering: true, ordering: true });
  },
});

export const supplier_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesupplier_category();
    t.crud.updateOnesupplier_category();
    t.crud.upsertOnesupplier_category();
    t.crud.deleteOnesupplier_category();

    t.crud.updateManysupplier_category();
    t.crud.deleteManysupplier_category();
  },
});
