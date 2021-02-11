import { objectType, extendType } from 'nexus';

export const connect_card = objectType({
  name: 'connect_card',
  definition(t) {
    t.model.id();
    t.model.expiry();
    t.model.name();
    t.model.cvv();
    t.model.uid();
    t.model.company_id();
    t.model.card();
    t.model.card_type();
  },
});

export const connect_cardQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_card();
    t.crud.connect_cards({ filtering: true, ordering: true });
  },
});

export const connect_cardMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_card();
    t.crud.updateOneconnect_card();
    t.crud.upsertOneconnect_card();
    t.crud.deleteOneconnect_card();

    t.crud.updateManyconnect_card();
    t.crud.deleteManyconnect_card();
  },
});
