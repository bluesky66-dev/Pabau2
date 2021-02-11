import { objectType, extendType } from 'nexus';

export const company_rooms = objectType({
  name: 'company_rooms',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.description();
    t.model.slots();
    t.model.all_services();
    t.model.is_active();
    t.model.all_locations();
    t.model.field_order();
    t.model.room_fee_type();
    t.model.room_fee();
    t.model.prod_id();
    t.model.imported();
    t.model.custom_id();
  },
});

export const company_roomsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_rooms();
    t.crud.company_rooms({ filtering: true, ordering: true });
  },
});

export const company_roomsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_rooms();
    t.crud.updateOnecompany_rooms();
    t.crud.upsertOnecompany_rooms();
    t.crud.deleteOnecompany_rooms();

    t.crud.updateManycompany_rooms();
    t.crud.deleteManycompany_rooms();
  },
});
