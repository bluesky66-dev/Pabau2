import { objectType, extendType } from 'nexus';

export const nhs_patient_attr = objectType({
  name: 'nhs_patient_attr',
  definition(t) {
    t.model.id();
    t.model.nhs_attr_id();
    t.model.nhs_patient_id();
    t.model.value();
    t.model.updated_at();
    t.model.created_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.group_label();
    t.model.nhs_patient_record_id();
  },
});

export const nhs_patient_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_patient_attr();
    t.crud.nhs_patient_attrs({ filtering: true, ordering: true });
  },
});

export const nhs_patient_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_patient_attr();
    t.crud.updateOnenhs_patient_attr();
    t.crud.upsertOnenhs_patient_attr();
    t.crud.deleteOnenhs_patient_attr();

    t.crud.updateManynhs_patient_attr();
    t.crud.deleteManynhs_patient_attr();
  },
});
