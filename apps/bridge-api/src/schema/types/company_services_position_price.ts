import { objectType, extendType } from 'nexus';

export const company_services_position_price = objectType({
  name: 'company_services_position_price',
  definition(t) {
    t.model.id();
    t.model.company_services_id();
    t.model.position_id();
    t.model.position_name();
    t.model.price();
    t.model.occupier();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const company_services_position_priceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_position_price();
    t.crud.company_services_position_prices({ filtering: true, ordering: true });
  },
});

export const company_services_position_priceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_position_price();
    t.crud.updateOnecompany_services_position_price();
    t.crud.upsertOnecompany_services_position_price();
    t.crud.deleteOnecompany_services_position_price();

    t.crud.updateManycompany_services_position_price();
    t.crud.deleteManycompany_services_position_price();
  },
});
