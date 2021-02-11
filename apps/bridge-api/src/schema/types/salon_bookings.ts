import { objectType, extendType } from 'nexus';

export const salon_bookings = objectType({
  name: 'salon_bookings',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.start_date();
    t.model.end_date();
    t.model.start_time();
    t.model.end_time();
    t.model.service();
    t.model.contact_id();
    t.model.UID();
    t.model.occupier();
    t.model.backgroudcolor();
    t.model.create_date();
    t.model.update_date();
    t.model.status();
    t.model.estimated_cost();
    t.model.tips();
    t.model.discounts();
    t.model.where();
    t.model.room_id();
    t.model.unique_id();
    t.model.reason();
    t.model.invoice_id();
    t.model.booking_id();
    t.model.Online();
    t.model.package_id();
    t.model.cancel_take();
    t.model.book_take();
    t.model.class_master_id();
    t.model.unavailable();
    t.model.coupon_claim_id();
    t.model.related_id();
    t.model.service_id();
    t.model.rebook();
    t.model.repeat_id();
    t.model.requested();
    t.model.sent_sms();
    t.model.sent_email();
    t.model.sent_survey();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.custom_user_id();
    t.model.custom_user_name();
    t.model.custom_service_id();
    t.model.imported();
    t.model.client_confirmed();
    t.model.hold_guid();
    t.model.created_by_uid();
    t.model.marketing_source();
    t.model.resource_id();
    t.model.custom_room_name();
    t.model.custom_created_by_user_name();
    t.model.location_id();
    t.model.modified_by_uid();
    t.model.sent_email_reminder();
    t.model.disable_locations();
    t.model.participant_master_uid();
    t.model.participant_master_booking_id();
    t.model.participant_slave_uids();
    t.model.participant_slave_booking_ids();
    t.model.private();
    t.model.external_guest_ids();
    t.model.description();
    t.model.issued_to();
    t.model.contract_id();
    t.model.all_day();
    t.model.interlinked_master_uid();
    t.model.all_day_start_date();
    t.model.all_day_end_date();
  },
});

export const salon_bookingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings();
    t.crud.salon_bookings({ filtering: true, ordering: true });
  },
});

export const salon_bookingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings();
    t.crud.updateOnesalon_bookings();
    t.crud.upsertOnesalon_bookings();
    t.crud.deleteOnesalon_bookings();

    t.crud.updateManysalon_bookings();
    t.crud.deleteManysalon_bookings();
  },
});
