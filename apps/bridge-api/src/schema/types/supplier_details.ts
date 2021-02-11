import { objectType, extendType } from 'nexus';

export const supplier_details = objectType({
  name: 'supplier_details',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.other_name_1();
    t.model.other_name();
    t.model.image();
  },
});

export const supplier_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.supplier_details();
    t.crud.supplier_details({ filtering: true, ordering: true });
  },
});

export const supplier_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesupplier_details();
    t.crud.updateOnesupplier_details();
    t.crud.upsertOnesupplier_details();
    t.crud.deleteOnesupplier_details();

    t.crud.updateManysupplier_details();
    t.crud.deleteManysupplier_details();
  },
});
