import { objectType, extendType } from 'nexus';

export const zdoctor_invoice_patient = objectType({
  name: 'zdoctor_invoice_patient',
  definition(t) {
    t.model.id();
    t.model.invoice_id();
    t.model.patient_id();
    t.model.discount();
    t.model.nettotal();
    t.model.taxtotal();
    t.model.total();
    t.model.occupier();
    t.model.user_custom_id();
  },
});

export const zdoctor_invoice_patientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zdoctor_invoice_patient();
    t.crud.zdoctor_invoice_patients({ filtering: true, ordering: true });
  },
});

export const zdoctor_invoice_patientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezdoctor_invoice_patient();
    t.crud.updateOnezdoctor_invoice_patient();
    t.crud.upsertOnezdoctor_invoice_patient();
    t.crud.deleteOnezdoctor_invoice_patient();

    t.crud.updateManyzdoctor_invoice_patient();
    t.crud.deleteManyzdoctor_invoice_patient();
  },
});
