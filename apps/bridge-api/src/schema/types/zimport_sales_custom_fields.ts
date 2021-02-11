import { objectType, extendType } from 'nexus';

export const zimport_sales_custom_fields = objectType({
  name: 'zimport_sales_custom_fields',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_sale_id();
    t.model.custom_field_name();
    t.model.custom_value();
  },
});

export const zimport_sales_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_sales_custom_fields();
    t.crud.zimport_sales_custom_fields({ filtering: true, ordering: true });
  },
});

export const zimport_sales_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_sales_custom_fields();
    t.crud.updateOnezimport_sales_custom_fields();
    t.crud.upsertOnezimport_sales_custom_fields();
    t.crud.deleteOnezimport_sales_custom_fields();

    t.crud.updateManyzimport_sales_custom_fields();
    t.crud.deleteManyzimport_sales_custom_fields();
  },
});
