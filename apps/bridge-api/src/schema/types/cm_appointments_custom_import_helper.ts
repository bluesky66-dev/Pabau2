import { objectType, extendType } from 'nexus';

export const cm_appointments_custom_import_helper = objectType({
  name: 'cm_appointments_custom_import_helper',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_appointment_id();
    t.model.custom_contact_name();
    t.model.custom_field_name();
    t.model.custom_field_value();
    t.model.added();
    t.model.appointment_id();
  },
});

export const cm_appointments_custom_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_appointments_custom_import_helper();
    t.crud.cm_appointments_custom_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_appointments_custom_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_appointments_custom_import_helper();
    t.crud.updateOnecm_appointments_custom_import_helper();
    t.crud.upsertOnecm_appointments_custom_import_helper();
    t.crud.deleteOnecm_appointments_custom_import_helper();

    t.crud.updateManycm_appointments_custom_import_helper();
    t.crud.deleteManycm_appointments_custom_import_helper();
  },
});
