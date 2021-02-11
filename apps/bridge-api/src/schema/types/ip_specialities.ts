import { objectType, extendType } from 'nexus';

export const ip_specialities = objectType({
  name: 'ip_specialities',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const ip_specialitiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_specialities();
    t.crud.ip_specialities({ filtering: true, ordering: true });
  },
});

export const ip_specialitiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_specialities();
    t.crud.updateOneip_specialities();
    t.crud.upsertOneip_specialities();
    t.crud.deleteOneip_specialities();

    t.crud.updateManyip_specialities();
    t.crud.deleteManyip_specialities();
  },
});
