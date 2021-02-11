import { objectType, extendType } from 'nexus';

export const zdoctor_services_type = objectType({
  name: 'zdoctor_services_type',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.name();
    t.model.duration();
    t.model.occupier();
  },
});

export const zdoctor_services_typeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zdoctor_services_type();
    t.crud.zdoctor_services_types({ filtering: true, ordering: true });
  },
});

export const zdoctor_services_typeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezdoctor_services_type();
    t.crud.updateOnezdoctor_services_type();
    t.crud.upsertOnezdoctor_services_type();
    t.crud.deleteOnezdoctor_services_type();

    t.crud.updateManyzdoctor_services_type();
    t.crud.deleteManyzdoctor_services_type();
  },
});
