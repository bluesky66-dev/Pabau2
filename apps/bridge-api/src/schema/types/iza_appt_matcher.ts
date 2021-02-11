import { objectType, extendType } from 'nexus';

export const iza_appt_matcher = objectType({
  name: 'iza_appt_matcher',
  definition(t) {
    t.model.id();
    t.model.invoice_id();
    t.model.appt_id();
    t.model.fixed();
  },
});

export const iza_appt_matcherQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.iza_appt_matcher();
    t.crud.iza_appt_matchers({ filtering: true, ordering: true });
  },
});

export const iza_appt_matcherMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneiza_appt_matcher();
    t.crud.updateOneiza_appt_matcher();
    t.crud.upsertOneiza_appt_matcher();
    t.crud.deleteOneiza_appt_matcher();

    t.crud.updateManyiza_appt_matcher();
    t.crud.deleteManyiza_appt_matcher();
  },
});
