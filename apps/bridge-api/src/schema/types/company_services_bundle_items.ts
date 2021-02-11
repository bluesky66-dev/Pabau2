import { objectType, extendType } from 'nexus';

export const company_services_bundle_items = objectType({
  name: 'company_services_bundle_items',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.service_id();
    t.model.item_type();
    t.model.item_id();
    t.model.item_qty();
  },
});

export const company_services_bundle_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_bundle_items();
    t.crud.company_services_bundle_items({ filtering: true, ordering: true });
  },
});

export const company_services_bundle_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_bundle_items();
    t.crud.updateOnecompany_services_bundle_items();
    t.crud.upsertOnecompany_services_bundle_items();
    t.crud.deleteOnecompany_services_bundle_items();

    t.crud.updateManycompany_services_bundle_items();
    t.crud.deleteManycompany_services_bundle_items();
  },
});
