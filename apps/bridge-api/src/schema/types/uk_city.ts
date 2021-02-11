import { objectType, extendType } from 'nexus';

export const uk_city = objectType({
  name: 'uk_city',
  definition(t) {
    t.model.id();
    t.model.post_prefix();
    t.model.city_name();
    t.model.company_id();
    t.model.nearest_clinic();
    t.model.assign_to_name();
    t.model.nearest_clinic_2();
  },
});

export const uk_cityQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.uk_city();
    t.crud.uk_cities({ filtering: true, ordering: true });
  },
});

export const uk_cityMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuk_city();
    t.crud.updateOneuk_city();
    t.crud.upsertOneuk_city();
    t.crud.deleteOneuk_city();

    t.crud.updateManyuk_city();
    t.crud.deleteManyuk_city();
  },
});
