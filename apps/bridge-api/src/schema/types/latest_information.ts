import { objectType, extendType } from 'nexus';

export const latest_information = objectType({
  name: 'latest_information',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.entry_date();
  },
});

export const latest_informationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.latest_information();
    t.crud.latest_informations({ filtering: true, ordering: true });
  },
});

export const latest_informationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelatest_information();
    t.crud.updateOnelatest_information();
    t.crud.upsertOnelatest_information();
    t.crud.deleteOnelatest_information();

    t.crud.updateManylatest_information();
    t.crud.deleteManylatest_information();
  },
});
