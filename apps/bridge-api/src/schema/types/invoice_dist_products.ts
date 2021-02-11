import { objectType, extendType } from 'nexus';

export const invoice_dist_products = objectType({
  name: 'invoice_dist_products',
  definition(t) {
    t.model.id();
    t.model.cat_id();
    t.model.dist_id();
    t.model.product_id();
    t.model.tax();
    t.model.fee();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const invoice_dist_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoice_dist_products();
    t.crud.invoice_dist_products({ filtering: true, ordering: true });
  },
});

export const invoice_dist_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoice_dist_products();
    t.crud.updateOneinvoice_dist_products();
    t.crud.upsertOneinvoice_dist_products();
    t.crud.deleteOneinvoice_dist_products();

    t.crud.updateManyinvoice_dist_products();
    t.crud.deleteManyinvoice_dist_products();
  },
});
