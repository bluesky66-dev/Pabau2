import { objectType, extendType } from 'nexus';

export const inv_products_import_helper = objectType({
  name: 'inv_products_import_helper',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.name();
    t.model.price();
    t.model.occupier();
  },
});

export const inv_products_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_products_import_helper();
    t.crud.inv_products_import_helpers({ filtering: true, ordering: true });
  },
});

export const inv_products_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_products_import_helper();
    t.crud.updateOneinv_products_import_helper();
    t.crud.upsertOneinv_products_import_helper();
    t.crud.deleteOneinv_products_import_helper();

    t.crud.updateManyinv_products_import_helper();
    t.crud.deleteManyinv_products_import_helper();
  },
});
