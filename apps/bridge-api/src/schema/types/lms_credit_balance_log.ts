import { objectType, extendType } from 'nexus';

export const lms_credit_balance_log = objectType({
  name: 'lms_credit_balance_log',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.amount();
    t.model.date();
    t.model.product_id();
    t.model.sale_id();
    t.model.referral_id();
    t.model.description();
    t.model.cashable();
  },
});

export const lms_credit_balance_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lms_credit_balance_log();
    t.crud.lms_credit_balance_logs({ filtering: true, ordering: true });
  },
});

export const lms_credit_balance_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelms_credit_balance_log();
    t.crud.updateOnelms_credit_balance_log();
    t.crud.upsertOnelms_credit_balance_log();
    t.crud.deleteOnelms_credit_balance_log();

    t.crud.updateManylms_credit_balance_log();
    t.crud.deleteManylms_credit_balance_log();
  },
});
