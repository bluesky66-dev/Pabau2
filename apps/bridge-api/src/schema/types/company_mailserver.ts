import { objectType, extendType } from 'nexus';

export const company_mailserver = objectType({
  name: 'company_mailserver',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.host();
    t.model.port();
    t.model.secure();
    t.model.username();
    t.model.password();
  },
});

export const company_mailserverQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_mailserver();
    t.crud.company_mailservers({ filtering: true, ordering: true });
  },
});

export const company_mailserverMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_mailserver();
    t.crud.updateOnecompany_mailserver();
    t.crud.upsertOnecompany_mailserver();
    t.crud.deleteOnecompany_mailserver();

    t.crud.updateManycompany_mailserver();
    t.crud.deleteManycompany_mailserver();
  },
});
