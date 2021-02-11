import { objectType, extendType } from 'nexus';

export const pabau_order = objectType({
  name: 'pabau_order',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.training_fee();
    t.model.previous_system();
    t.model.support_plan();
    t.model.order_notes();
    t.model.subscription_fee();
    t.model.support_fee();
    t.model.date_created();
    t.model.terms_signed();
    t.model.subscription_name();
    t.model.lead_source();
    t.model.signed_contract();
    t.model.proposal_sent();
    t.model.setup_fee();
    t.model.waive_setup_fee();
    t.model.training_fee_done();
    t.model.setup_fee_done();
    t.model.support_fee_done();
    t.model.subscription_fee_done();
    t.model.summary_order();
    t.model.discounts();
  },
});

export const pabau_orderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_order();
    t.crud.pabau_orders({ filtering: true, ordering: true });
  },
});

export const pabau_orderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_order();
    t.crud.updateOnepabau_order();
    t.crud.upsertOnepabau_order();
    t.crud.deleteOnepabau_order();

    t.crud.updateManypabau_order();
    t.crud.deleteManypabau_order();
  },
});
