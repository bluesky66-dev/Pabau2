import { objectType, extendType } from 'nexus';

export const session_packages = objectType({
  name: 'session_packages',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.session_count();
    t.model.duration();
    t.model.price();
    t.model.activities();
    t.model.occupier();
    t.model.CreatedDate();
    t.model.imported();
    t.model.inactive();
    t.model.deleted();
    t.model.product_id();
    t.model.service_product_id();
    t.model.hard_deleted();
    t.model.session_package_master_id();
    t.model.tax_id();
    t.model.custom_service_name();
    t.model.custom_price_item();
    t.model.empty_name();
    t.model.old_price();
    t.model.old_duration();
    t.model.disabledusers();
    t.model.sold_online();
  },
});

export const session_packagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.session_packages();
    t.crud.session_packages({ filtering: true, ordering: true });
  },
});

export const session_packagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesession_packages();
    t.crud.updateOnesession_packages();
    t.crud.upsertOnesession_packages();
    t.crud.deleteOnesession_packages();

    t.crud.updateManysession_packages();
    t.crud.deleteManysession_packages();
  },
});
