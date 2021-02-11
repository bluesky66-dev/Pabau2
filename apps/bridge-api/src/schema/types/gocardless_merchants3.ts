import { objectType, extendType } from 'nexus';

export const gocardless_merchants3 = objectType({
  name: 'gocardless_merchants3',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.access_token();
    t.model.merchant_id();
    t.model.event_log_id();
  },
});

export const gocardless_merchants3Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gocardless_merchants3();
    t.crud.gocardless_merchants3s({ filtering: true, ordering: true });
  },
});

export const gocardless_merchants3Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegocardless_merchants3();
    t.crud.updateOnegocardless_merchants3();
    t.crud.upsertOnegocardless_merchants3();
    t.crud.deleteOnegocardless_merchants3();

    t.crud.updateManygocardless_merchants3();
    t.crud.deleteManygocardless_merchants3();
  },
});
