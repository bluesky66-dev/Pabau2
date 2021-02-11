import { objectType, extendType } from 'nexus';

export const purchase = objectType({
  name: 'purchase',
  definition(t) {
    t.model.p_id();
    t.model.customer_id();
    t.model.items();
    t.model.price();
    t.model.date();
    t.model.customer_name();
    t.model.currency();
    t.model.comp_id();
  },
});

export const purchaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.purchase();
    t.crud.purchases({ filtering: true, ordering: true });
  },
});

export const purchaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepurchase();
    t.crud.updateOnepurchase();
    t.crud.upsertOnepurchase();
    t.crud.deleteOnepurchase();

    t.crud.updateManypurchase();
    t.crud.deleteManypurchase();
  },
});
