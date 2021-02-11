import { objectType, extendType } from 'nexus';

export const zimport_account_balance = objectType({
  name: 'zimport_account_balance',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_contact_name();
    t.model.amount();
    t.model.custom_user_name();
    t.model.date();
    t.model.description();
    t.model.item();
    t.model.contact_id();
    t.model.added();
  },
});

export const zimport_account_balanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_account_balance();
    t.crud.zimport_account_balances({ filtering: true, ordering: true });
  },
});

export const zimport_account_balanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_account_balance();
    t.crud.updateOnezimport_account_balance();
    t.crud.upsertOnezimport_account_balance();
    t.crud.deleteOnezimport_account_balance();

    t.crud.updateManyzimport_account_balance();
    t.crud.deleteManyzimport_account_balance();
  },
});
