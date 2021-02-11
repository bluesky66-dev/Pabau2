import { objectType, extendType } from 'nexus';

export const at_treatments = objectType({
  name: 'at_treatments',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.image();
    t.model.description();
  },
});

export const at_treatmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_treatments();
    t.crud.at_treatments({ filtering: true, ordering: true });
  },
});

export const at_treatmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_treatments();
    t.crud.updateOneat_treatments();
    t.crud.upsertOneat_treatments();
    t.crud.deleteOneat_treatments();

    t.crud.updateManyat_treatments();
    t.crud.deleteManyat_treatments();
  },
});
