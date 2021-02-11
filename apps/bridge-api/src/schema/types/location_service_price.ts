import { objectType, extendType } from 'nexus';

export const location_service_price = objectType({
  name: 'location_service_price',
  definition(t) {
    t.model.id();
    t.model.location_id();
    t.model.service_id();
    t.model.price();
  },
});

export const location_service_priceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.location_service_price();
    t.crud.location_service_prices({ filtering: true, ordering: true });
  },
});

export const location_service_priceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelocation_service_price();
    t.crud.updateOnelocation_service_price();
    t.crud.upsertOnelocation_service_price();
    t.crud.deleteOnelocation_service_price();

    t.crud.updateManylocation_service_price();
    t.crud.deleteManylocation_service_price();
  },
});
