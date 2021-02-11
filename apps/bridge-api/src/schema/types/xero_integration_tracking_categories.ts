import { objectType, extendType } from 'nexus';

export const xero_integration_tracking_categories = objectType({
  name: 'xero_integration_tracking_categories',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.xero_id();
    t.model.target();
    t.model.company_id();
    t.model.status();
    t.model.created_at();
    t.model.modified_at();
  },
});

export const xero_integration_tracking_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.xero_integration_tracking_categories();
    t.crud.xero_integration_tracking_categories({ filtering: true, ordering: true });
  },
});

export const xero_integration_tracking_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnexero_integration_tracking_categories();
    t.crud.updateOnexero_integration_tracking_categories();
    t.crud.upsertOnexero_integration_tracking_categories();
    t.crud.deleteOnexero_integration_tracking_categories();

    t.crud.updateManyxero_integration_tracking_categories();
    t.crud.deleteManyxero_integration_tracking_categories();
  },
});
