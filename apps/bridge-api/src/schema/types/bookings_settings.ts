import { objectType, extendType } from 'nexus';

export const bookings_settings = objectType({
  name: 'bookings_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.email_mode();
    t.model.sms_mode();
    t.model.email_id();
    t.model.email_confirm_id();
    t.model.sms_id();
    t.model.email_reminder_id();
    t.model.auto_cal();
    t.model.auto_email();
    t.model.auto_sms();
    t.model.auto_con();
    t.model.feedback_mode();
    t.model.feedback_id();
    t.model.sms_name();
    t.model.feedback_days_after();
    t.model.feedback_send_time();
    t.model.reminder_mode();
    t.model.days_before();
    t.model.send_time();
    t.model.sms_days_before();
    t.model.sms_send_time();
    t.model.class_sms_days_before();
    t.model.class_sms_send_time();
    t.model.room_support();
    t.model.feedback_fromemail();
    t.model.confirm_fromemail();
    t.model.sms_from();
    t.model.reminder_fromemail();
    t.model.send_sms();
    t.model.send_email();
    t.model.send_reminder();
    t.model.send_feedback();
    t.model.attach_invoice();
    t.model.start_time();
    t.model.end_time();
    t.model.booking_emails();
    t.model.slot_interval();
    t.model.font_color();
    t.model.disable_second_cal();
    t.model.font_size();
    t.model.disable_time();
    t.model.lock_timer();
    t.model.disable_surname();
    t.model.arrived_color();
    t.model.complete_color();
    t.model.cancel_sms_notify();
    t.model.cancel_email_notify();
    t.model.reschedule_sms_notify();
    t.model.reschedule_email_notify();
    t.model.noshow_email_notify();
    t.model.class_noshow_email_notify();
    t.model.class_reschedule_email_notify();
    t.model.class_reminder_email_notify();
    t.model.class_noshow_sms_notify();
    t.model.class_reschedule_sms_notify();
    t.model.class_reminder_sms_notify();
    t.model.noshow_sms_notify();
    t.model.location_support();
    t.model.noshow_count();
    t.model.reschedule_sms_from();
    t.model.reschedule_sms_tmpl();
    t.model.reschedule_email_from();
    t.model.reschedule_email_tmpl();
    t.model.cancel_sms_from();
    t.model.cancel_sms_tmpl();
    t.model.cancel_email_from();
    t.model.cancel_email_tmpl();
    t.model.sms_confirm_id();
    t.model.noshow_email_from();
    t.model.noshow_email_tmpl();
    t.model.class_noshow_email_tmpl();
    t.model.class_reschedule_email_tmpl();
    t.model.class_reminder_email_tmpl();
    t.model.class_noshow_sms_tmpl();
    t.model.class_reschedule_sms_tmpl();
    t.model.class_reminder_sms_tmpl();
    t.model.noshow_sms_from();
    t.model.noshow_sms_tmpl();
    t.model.column_total();
    t.model.tooltip_head();
    t.model.tooltip_body();
    t.model.appt_head();
    t.model.appt_body();
    t.model.holiday_reset_date();
    t.model.holiday_usual_day();
    t.model.holiday_per_month();
    t.model.holiday_default();
    t.model.group_booking_change_email_enable();
    t.model.group_booking_change_template_id();
    t.model.group_booking_cancel_email_enable();
    t.model.group_booking_cancel_template_id();
    t.model.package_used_email_enable();
    t.model.package_used_template_id();
    t.model.disable_ics();
    t.model.initials();
    t.model.disable_service_filter();
    t.model.disable_book_by_package();
    t.model.allow_overlapping_appts();
    t.model.modified_by();
    t.model.modified_date();
    t.model.conference_reminder_id();
  },
});

export const bookings_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookings_settings();
    t.crud.bookings_settings({ filtering: true, ordering: true });
  },
});

export const bookings_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebookings_settings();
    t.crud.updateOnebookings_settings();
    t.crud.upsertOnebookings_settings();
    t.crud.deleteOnebookings_settings();

    t.crud.updateManybookings_settings();
    t.crud.deleteManybookings_settings();
  },
});
