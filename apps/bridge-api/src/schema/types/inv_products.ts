import { objectType, extendType } from 'nexus';

export const inv_products = objectType({
  name: 'inv_products',
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
    t.model.procedure_date();
    t.model.product_account_code_xero();
    t.model.allow_negative_qty();
  },
});

export const inv_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_products();
    t.crud.inv_products({ filtering: true, ordering: true });
  },
});

export const inv_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_products();
    t.crud.updateOneinv_products();
    t.crud.upsertOneinv_products();
    t.crud.deleteOneinv_products();

    t.crud.updateManyinv_products();
    t.crud.deleteManyinv_products();
  },
});
