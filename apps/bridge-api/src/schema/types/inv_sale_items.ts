import { objectType, extendType } from 'nexus';

export const inv_sale_items = objectType({
  name: 'inv_sale_items',
  definition(t) {
    t.model.id();
    t.model.sale_id();
    t.model.product_id();
    t.model.product_code();
    t.model.product_name();
    t.model.product_unit();
    t.model.tax_rate_id();
    t.model.tax();
    t.model.quantity();
    t.model.unit_price();
    t.model.gross_total();
    t.model.val_tax();
    t.model.occupier();
    t.model.uid();
    t.model.staff_purchase();
    t.model.created_date();
    t.model.modified_date();
    t.model.custom_id();
    t.model.sale_custom_id();
    t.model.contact_custom_id();
    t.model.product_custom_id();
    t.model.Practitioner_id();
    t.model.Threatment_id();
    t.model.User_id();
    t.model.VAT_id();
    t.model.LineDiscount();
    t.model.imported();
    t.model.UnitDiscount();
    t.model.discount_reason();
    t.model.product_category_id();
    t.model.product_category_name();
    t.model.product_category_type();
    t.model.from_pos();
    t.model.tax_total();
    t.model.custom_product_name();
    t.model.booking_id();
  },
});

export const inv_sale_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sale_items();
    t.crud.inv_sale_items({ filtering: true, ordering: true });
  },
});

export const inv_sale_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sale_items();
    t.crud.updateOneinv_sale_items();
    t.crud.upsertOneinv_sale_items();
    t.crud.deleteOneinv_sale_items();

    t.crud.updateManyinv_sale_items();
    t.crud.deleteManyinv_sale_items();
  },
});
