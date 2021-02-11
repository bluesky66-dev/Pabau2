import { objectType, extendType } from 'nexus';

export const partner_rates = objectType({
  name: 'partner_rates',
  definition(t) {
    t.model.id();
    t.model.partner_id();
    t.model.rate_60();
    t.model.rate_90();
    t.model.rate_125();
    t.model.rate_240();
  },
});

export const partner_ratesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.partner_rates();
    t.crud.partner_rates({ filtering: true, ordering: true });
  },
});

export const partner_ratesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepartner_rates();
    t.crud.updateOnepartner_rates();
    t.crud.upsertOnepartner_rates();
    t.crud.deleteOnepartner_rates();

    t.crud.updateManypartner_rates();
    t.crud.deleteManypartner_rates();
  },
});
