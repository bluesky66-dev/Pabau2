import { objectType, extendType } from 'nexus';

export const inv_sales_import = objectType({
  name: 'inv_sales_import',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.imported();
    t.model.date();
    t.model.biller_name();
    t.model.customer_name();
    t.model.product_name();
    t.model.custom_id();
    t.model.quantity();
    t.model.total();
    t.model.reference_no();
    t.model.custom_contact_id();
    t.model.unit_price();
    t.model.custom_practitioner_id();
    t.model.payment_method();
    t.model.val_tax();
    t.model.discount();
    t.model.custom_id2();
    t.model.custom_category_name();
    t.model.payed_amount();
    t.model.description();
    t.model.added();
    t.model.note();
    t.model.product_code();
    t.model.custom_clinic_id();
    t.model.contact_id();
    t.model.invoice_due();
    t.model.status();
    t.model.location_name();
    t.model.location_id();
  },
});

export const inv_sales_importQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_import();
    t.crud.inv_sales_imports({ filtering: true, ordering: true });
  },
});

export const inv_sales_importMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_import();
    t.crud.updateOneinv_sales_import();
    t.crud.upsertOneinv_sales_import();
    t.crud.deleteOneinv_sales_import();

    t.crud.updateManyinv_sales_import();
    t.crud.deleteManyinv_sales_import();
  },
});
