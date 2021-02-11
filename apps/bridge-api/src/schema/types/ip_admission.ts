import { objectType, extendType } from 'nexus';

export const ip_admission = objectType({
  name: 'ip_admission',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.contact_id();
    t.model.bed_id();
    t.model.booking_id();
    t.model.admitted_at();
  },
});

export const ip_admissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_admission();
    t.crud.ip_admissions({ filtering: true, ordering: true });
  },
});

export const ip_admissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_admission();
    t.crud.updateOneip_admission();
    t.crud.upsertOneip_admission();
    t.crud.deleteOneip_admission();

    t.crud.updateManyip_admission();
    t.crud.deleteManyip_admission();
  },
});
