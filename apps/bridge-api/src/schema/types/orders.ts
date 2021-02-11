import { objectType, extendType } from 'nexus';

export const orders = objectType({
  name: 'orders',
  definition(t) {
    t.model.orderid();
    t.model.date();
    t.model.reference();
    t.model.name();
    t.model.email();
    t.model.p_method();
    t.model.quantity();
    t.model.total();
    t.model.status();
    t.model.occupier();
    t.model.eventid();
    t.model.t_type();
  },
});

export const ordersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orders();
    t.crud.orders({ filtering: true, ordering: true });
  },
});

export const ordersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneorders();
    t.crud.updateOneorders();
    t.crud.upsertOneorders();
    t.crud.deleteOneorders();

    t.crud.updateManyorders();
    t.crud.deleteManyorders();
  },
});
