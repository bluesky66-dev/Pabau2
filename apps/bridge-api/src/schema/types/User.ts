import { objectType, extendType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.full_name();
    t.model.password();
    t.model.password_algor();
    t.model.salt();
    t.model.created();
    t.model.last_login();
    t.model.company();
    t.model.hash();
    t.model.email();
    t.model.admin();
    t.model.address();
    t.model.timezone();
    t.model.locale();
    t.model.language();
    t.model.job_title();
    t.model.department();
    t.model.division();
    t.model.super();
    t.model.default_page();
    t.model.signature();
    t.model.image();
    t.model.position();
    t.model.location();
    t.model.deleted();
    t.model.pass_code();
    t.model.phone_number();
    t.model.hide_online_bookings();
    t.model.passcode();
    t.model.last_loaded_page();
    t.model.temporary_password();
    t.model.custom_id();
    t.model.hide_calendar();
    t.model.calendar_order();
    t.model.clocked_in();
    t.model.clocked_out();
    t.model.last_password_reset();
    t.model.force_password();
    t.model.limited_user();
    t.model.can_void();
    t.model.can_refund();
    t.model.can_report();
    t.model.can_rota();
    t.model.staff_read_only();
    t.model.stock_read_only();
    t.model.all_reports();
    t.model.performance_stats();
    t.model.disable_tutorial();
    t.model.all_services();
    t.model.delete_treatment();
    t.model.admin_tasks();
    t.model.admin_leads();
    t.model.imported();
    t.model.login_fail_count();
    t.model.can_edit_booking_time();
    t.model.user_color();
    t.model.disable_multiple_clinics();
    t.model.is_hcp();
    t.model.login_disabled();
    t.model.can_patient_appoint();
    t.model.can_patient_communicatons();
    t.model.can_patient_photos();
    t.model.can_patient_fiancials();
    t.model.can_patient_treatments();
    t.model.can_patient_docs();
    t.model.can_patient_packages();
    t.model.can_patient_prescription();
    t.model.can_patient_consents();
    t.model.can_patient_giftvoucher();
    t.model.can_patient_loyalty();
    t.model.can_patient_recall();
    t.model.can_patient_memberships();
    t.model.can_cancel_booking();
    t.model.notify_on_booking();
    t.model.can_edit_communications();
    t.model.can_delete_communications();
    t.model.can_view_full_cal();
    t.model.permission_last_role();
    t.model.can_merge();
    t.model.can_discount();
    t.model.can_discount_single();
    t.model.restored();
    t.model.google_auth_secret();
    t.model.default_contract_id();
    t.model.can_see_personal();
    t.model.appear_on_rota();
    t.model.can_patient_medical_history();
    t.model.can_lab_requests();
    t.model.detailed_view();
    t.model.can_make_blockout();
    t.model.can_delete_blockout();
    t.model.can_move_blockout();
    t.model.main_contact();
    t.model.user_security_questions_answer();
  },
});

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
    t.crud.users({ filtering: true, ordering: true });

    t.field('usersCount', {
      type: 'Int',
      args: {
        where: 'UserWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.user.count(args);
      },
    });
  },
});

export const userMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.upsertOneUser();
    t.crud.deleteOneUser();

    t.crud.updateManyUser();
    t.crud.deleteManyUser();
  },
});
