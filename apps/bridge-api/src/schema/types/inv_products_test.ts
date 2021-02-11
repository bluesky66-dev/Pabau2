import { objectType, extendType } from 'nexus';

export const inv_products_test = objectType({
  name: 'inv_products_test',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.sku();
    t.model.unit();
    t.model.size();
    t.model.product_order();
    t.model.um();
    t.model.cost();
    t.model.price();
    t.model.alert_quantity();
    t.model.show_on_website();
    t.model.image();
    t.model.category_id();
    t.model.supplier_id();
    t.model.note();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.Description();
    t.model.custom_id();
    t.model.category_custom_id();
    t.model.PriceListGroup_id();
    t.model.VATRate_id();
    t.model.imported();
    t.model.old_barcode();
    t.model.max_level();
    t.model.is_active();
    t.model.product_points();
    t.model.open_sale();
    t.model.new_imported();
    t.model.sage_nominal_code();
  },
});

export const inv_products_testQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_products_test();
    t.crud.inv_products_tests({ filtering: true, ordering: true });
  },
});

export const inv_products_testMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_products_test();
    t.crud.updateOneinv_products_test();
    t.crud.upsertOneinv_products_test();
    t.crud.deleteOneinv_products_test();

    t.crud.updateManyinv_products_test();
    t.crud.deleteManyinv_products_test();
  },
});
