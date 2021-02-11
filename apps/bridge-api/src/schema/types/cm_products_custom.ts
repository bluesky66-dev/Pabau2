import { objectType, extendType } from 'nexus';

export const cm_products_custom = objectType({
  name: 'cm_products_custom',
  definition(t) {
    t.model.id();
    t.model.product_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
  },
});

export const cm_products_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_products_custom();
    t.crud.cm_products_customs({ filtering: true, ordering: true });
  },
});

export const cm_products_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_products_custom();
    t.crud.updateOnecm_products_custom();
    t.crud.upsertOnecm_products_custom();
    t.crud.deleteOnecm_products_custom();

    t.crud.updateManycm_products_custom();
    t.crud.deleteManycm_products_custom();
  },
});
