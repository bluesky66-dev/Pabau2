import { objectType, extendType } from 'nexus';

export const membership_package = objectType({
  name: 'membership_package',
  definition(t) {
    t.model.id();
    t.model.membership_id();
    t.model.package_id();
    t.model.product_name();
    t.model.product_price();
    t.model.type();
    t.model.membership_total();
  },
});

export const membership_packageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.membership_package();
    t.crud.membership_packages({ filtering: true, ordering: true });
  },
});

export const membership_packageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemembership_package();
    t.crud.updateOnemembership_package();
    t.crud.upsertOnemembership_package();
    t.crud.deleteOnemembership_package();

    t.crud.updateManymembership_package();
    t.crud.deleteManymembership_package();
  },
});
