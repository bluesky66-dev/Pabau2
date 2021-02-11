import { objectType, extendType } from 'nexus';

export const engage_custom_meters = objectType({
  name: 'engage_custom_meters',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
  },
});

export const engage_custom_metersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_custom_meters();
    t.crud.engage_custom_meters({ filtering: true, ordering: true });
  },
});

export const engage_custom_metersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_custom_meters();
    t.crud.updateOneengage_custom_meters();
    t.crud.upsertOneengage_custom_meters();
    t.crud.deleteOneengage_custom_meters();

    t.crud.updateManyengage_custom_meters();
    t.crud.deleteManyengage_custom_meters();
  },
});
