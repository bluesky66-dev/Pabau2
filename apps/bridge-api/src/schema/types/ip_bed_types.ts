import { objectType, extendType } from 'nexus';

export const ip_bed_types = objectType({
  name: 'ip_bed_types',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.floor_id();
    t.model.location_id();
    t.model.company_id();
    t.model.uid();
    t.model.rmo_uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const ip_bed_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_bed_types();
    t.crud.ip_bed_types({ filtering: true, ordering: true });
  },
});

export const ip_bed_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_bed_types();
    t.crud.updateOneip_bed_types();
    t.crud.upsertOneip_bed_types();
    t.crud.deleteOneip_bed_types();

    t.crud.updateManyip_bed_types();
    t.crud.deleteManyip_bed_types();
  },
});
