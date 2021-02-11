import { objectType, extendType } from 'nexus';

export const email_blacklist = objectType({
  name: 'email_blacklist',
  definition(t) {
    t.model.email_id();
    t.model.email_address();
    t.model.email_action();
    t.model.notify_company();
  },
});

export const email_blacklistQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.email_blacklist();
    t.crud.email_blacklists({ filtering: true, ordering: true });
  },
});

export const email_blacklistMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneemail_blacklist();
    t.crud.updateOneemail_blacklist();
    t.crud.upsertOneemail_blacklist();
    t.crud.deleteOneemail_blacklist();

    t.crud.updateManyemail_blacklist();
    t.crud.deleteManyemail_blacklist();
  },
});
