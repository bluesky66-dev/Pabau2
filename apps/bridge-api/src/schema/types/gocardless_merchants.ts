import { objectType, extendType } from 'nexus';

export const gocardless_merchants = objectType({
  name: 'gocardless_merchants',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.access_token();
    t.model.merchant_id();
    t.model.payment_id();
    t.model.biller_id();
  },
});

export const gocardless_merchantsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_merchants();
    t.crud.gocardless_merchants({ filtering: true, ordering: true });
  },
});

export const gocardless_merchantsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_merchants();
    t.crud.updateOnegocardless_merchants();
    t.crud.upsertOnegocardless_merchants();
    t.crud.deleteOnegocardless_merchants();

    t.crud.updateManygocardless_merchants();
    t.crud.deleteManygocardless_merchants();
  },
});
