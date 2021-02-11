import { objectType, extendType } from 'nexus';

export const ip_beds = objectType({
  name: 'ip_beds',
  definition(t) {
    t.model.id();
    t.model.bed_name();
    t.model.location_id();
    t.model.room_id();
    t.model.bed_type_id();
    t.model.speciality_ids();
    t.model.company_id();
    t.model.description();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const ip_bedsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_beds();
    t.crud.ip_beds({ filtering: true, ordering: true });
  },
});

export const ip_bedsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_beds();
    t.crud.updateOneip_beds();
    t.crud.upsertOneip_beds();
    t.crud.deleteOneip_beds();

    t.crud.updateManyip_beds();
    t.crud.deleteManyip_beds();
  },
});
