import { objectType, extendType } from 'nexus';

export const salon_bookings_import_helper = objectType({
  name: 'salon_bookings_import_helper',
  definition(t) {
    t.model.id();
    t.model.start_date();
    t.model.end_date();
    t.model.service();
    t.model.custom_contact_name();
    t.model.custom_user_name();
    t.model.occupier();
    t.model.imported();
    t.model.taken();
    t.model.custom_contact_id();
    t.model.custom_user_id();
    t.model.create_date();
    t.model.custom_room_name();
    t.model.title();
    t.model.Atended();
    t.model.CancellationReq();
    t.model.ReqReason();
    t.model.DNA();
    t.model.custom_created_by_user_name();
    t.model.status_name();
    t.model.color();
    t.model.updated_date();
    t.model.cancel_date();
    t.model.noshow_date();
    t.model.added();
    t.model.custom_service_id();
    t.model.custom_id();
    t.model.sms_confirmation();
    t.model.sms_reminder();
    t.model.custom_type_name();
    t.model.custom_deposit_name();
    t.model.custom_subject();
    t.model.custom_body();
    t.model.custom_title();
    t.model.custom_title_final();
    t.model.custom_treatment_id();
    t.model.contact_id();
    t.model.custom_treatment_group_id();
    t.model.custom_treatment_type_id();
  },
});

export const salon_bookings_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_import_helper();
    t.crud.salon_bookings_import_helpers({ filtering: true, ordering: true });
  },
});

export const salon_bookings_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_import_helper();
    t.crud.updateOnesalon_bookings_import_helper();
    t.crud.upsertOnesalon_bookings_import_helper();
    t.crud.deleteOnesalon_bookings_import_helper();

    t.crud.updateManysalon_bookings_import_helper();
    t.crud.deleteManysalon_bookings_import_helper();
  },
});
