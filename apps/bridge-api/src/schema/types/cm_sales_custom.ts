import { objectType, extendType } from 'nexus';

export const cm_sales_custom = objectType({
  name: 'cm_sales_custom',
  definition(t) {
    t.model.id();
    t.model.sale_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.imported();
  },
});

export const cm_sales_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_sales_custom();
    t.crud.cm_sales_customs({ filtering: true, ordering: true });
  },
});

export const cm_sales_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_sales_custom();
    t.crud.updateOnecm_sales_custom();
    t.crud.upsertOnecm_sales_custom();
    t.crud.deleteOnecm_sales_custom();

    t.crud.updateManycm_sales_custom();
    t.crud.deleteManycm_sales_custom();
  },
});
