import { objectType, extendType } from 'nexus';

export const bacs_account = objectType({
  name: 'bacs_account',
  definition(t) {
    t.model.id();
    t.model.bank_tag();
    t.model.comp_id();
    t.model.branch_name();
    t.model.account_holder();
    t.model.account_no();
    t.model.sort_code();
  },
});

export const bacs_accountQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bacs_account();
    t.crud.bacs_accounts({ filtering: true, ordering: true });
  },
});

export const bacs_accountMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebacs_account();
    t.crud.updateOnebacs_account();
    t.crud.upsertOnebacs_account();
    t.crud.deleteOnebacs_account();

    t.crud.updateManybacs_account();
    t.crud.deleteManybacs_account();
  },
});
