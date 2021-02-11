import { objectType, extendType } from 'nexus';

export const contact_insurer = objectType({
  name: 'contact_insurer',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.insurer_id();
  },
});

export const contact_insurerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_insurer();
    t.crud.contact_insurers({ filtering: true, ordering: true });
  },
});

export const contact_insurerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_insurer();
    t.crud.updateOnecontact_insurer();
    t.crud.upsertOnecontact_insurer();
    t.crud.deleteOnecontact_insurer();

    t.crud.updateManycontact_insurer();
    t.crud.deleteManycontact_insurer();
  },
});
