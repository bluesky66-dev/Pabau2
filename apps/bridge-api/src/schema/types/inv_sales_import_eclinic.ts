import { objectType, extendType } from 'nexus';

export const inv_sales_import_eclinic = objectType({
  name: 'inv_sales_import_eclinic',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.total();
  },
});

export const inv_sales_import_eclinicQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_import_eclinic();
    t.crud.inv_sales_import_eclinics({ filtering: true, ordering: true });
  },
});

export const inv_sales_import_eclinicMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_import_eclinic();
    t.crud.updateOneinv_sales_import_eclinic();
    t.crud.upsertOneinv_sales_import_eclinic();
    t.crud.deleteOneinv_sales_import_eclinic();

    t.crud.updateManyinv_sales_import_eclinic();
    t.crud.deleteManyinv_sales_import_eclinic();
  },
});
