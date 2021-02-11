import { objectType, extendType } from 'nexus';

export const communication_receipient = objectType({
  name: 'communication_receipient',
  definition(t) {
    t.model.id();
    t.model.communication_id();
    t.model.receipient_id();
    t.model.creation_date();
  },
});

export const communication_receipientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_receipient();
    t.crud.communication_receipients({ filtering: true, ordering: true });
  },
});

export const communication_receipientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_receipient();
    t.crud.updateOnecommunication_receipient();
    t.crud.upsertOnecommunication_receipient();
    t.crud.deleteOnecommunication_receipient();

    t.crud.updateManycommunication_receipient();
    t.crud.deleteManycommunication_receipient();
  },
});
