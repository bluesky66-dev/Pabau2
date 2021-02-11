import { objectType, extendType } from 'nexus';

export const seller = objectType({
  name: 'seller',
  definition(t) {
    t.model.sellerid();
    t.model.start();
    t.model.name();
    t.model.halls();
    t.model.number();
    t.model.fbid();
    t.model.Block();
    t.model.year();
    t.model.occupier();
    t.model.university();
    t.model.visible();
    t.model.job_title();
  },
});

export const sellerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.seller();
    t.crud.sellers({ filtering: true, ordering: true });
  },
});

export const sellerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneseller();
    t.crud.updateOneseller();
    t.crud.upsertOneseller();
    t.crud.deleteOneseller();

    t.crud.updateManyseller();
    t.crud.deleteManyseller();
  },
});
