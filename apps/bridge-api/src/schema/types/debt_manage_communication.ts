import { objectType, extendType } from 'nexus';

export const debt_manage_communication = objectType({
  name: 'debt_manage_communication',
  definition(t) {
    t.model.id();
    t.model.invoice_id();
    t.model.communication_id();
    t.model.letter_no();
    t.model.type();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const debt_manage_communicationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.debt_manage_communication();
    t.crud.debt_manage_communications({ filtering: true, ordering: true });
  },
});

export const debt_manage_communicationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedebt_manage_communication();
    t.crud.updateOnedebt_manage_communication();
    t.crud.upsertOnedebt_manage_communication();
    t.crud.deleteOnedebt_manage_communication();

    t.crud.updateManydebt_manage_communication();
    t.crud.deleteManydebt_manage_communication();
  },
});
