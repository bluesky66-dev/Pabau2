import { objectType, extendType } from 'nexus';

export const ip_service_procedure = objectType({
  name: 'ip_service_procedure',
  definition(t) {
    t.model.id();
    t.model.sid();
    t.model.name();
    t.model.sites();
    t.model.external_code();
    t.model.notes();
    t.model.procedure_group_id();
    t.model.modality_type();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
  },
});

export const ip_service_procedureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_service_procedure();
    t.crud.ip_service_procedures({ filtering: true, ordering: true });
  },
});

export const ip_service_procedureMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_service_procedure();
    t.crud.updateOneip_service_procedure();
    t.crud.upsertOneip_service_procedure();
    t.crud.deleteOneip_service_procedure();

    t.crud.updateManyip_service_procedure();
    t.crud.deleteManyip_service_procedure();
  },
});
