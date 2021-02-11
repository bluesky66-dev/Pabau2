import { objectType, extendType } from 'nexus';

export const salon_bookings_history_trigger = objectType({
  name: 'salon_bookings_history_trigger',
  definition(t) {
    t.model.id();
    t.model.mode();
    t.model.booking_id();
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
    t.model.date_changed();
    t.model.location_id();
    t.model.modified_by_uid();
  },
});

export const salon_bookings_history_triggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salon_bookings_history_trigger();
    t.crud.salon_bookings_history_triggers({ filtering: true, ordering: true });
  },
});

export const salon_bookings_history_triggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalon_bookings_history_trigger();
    t.crud.updateOnesalon_bookings_history_trigger();
    t.crud.upsertOnesalon_bookings_history_trigger();
    t.crud.deleteOnesalon_bookings_history_trigger();

    t.crud.updateManysalon_bookings_history_trigger();
    t.crud.deleteManysalon_bookings_history_trigger();
  },
});
