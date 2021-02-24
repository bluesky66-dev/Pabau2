import { objectType, extendType } from 'nexus';

export const CompanyDetails = objectType({
  name: 'CompanyDetails',
  definition(t) {
    t.model.details_id();
    t.model.company_id();
    t.model.company();
    t.model.company_name();
    t.model.subscription();
    t.model.industry_sector();
    t.model.employees();
    t.model.website();
    t.model.street();
    t.model.city();
    t.model.county();
    t.model.post_code();
    t.model.country();
    t.model.phone();
    t.model.fax();
    t.model.info_email();
    t.model.admin();
    t.model.logo();
    t.model.currency();
    t.model.facebook_page();
    t.model.twitter_page();
    t.model.head_office();
    t.model.footer_logo();
    t.model.header_logo();
    t.model.vat();
    t.model.date_format();
    t.model.week_start_day();
    t.model.auto_sms();
    t.model.sms_active();
    t.model.db_lock();
    t.model.stock_manager();
    t.model.company_notes();
    t.model.timezone_id();
    t.model.converted_value();
    t.model.enable_2fa();
    t.model.enable_ad();
    t.model.enable_ad_code();
    t.model.enable_ip_filter();
    t.model.demo_mode();
    t.model.linkedin_page();
    t.model.youtube_page();
    t.model.is_surgical();
    t.model.private_treatment_notes();
    t.model.accept_insurance();
    t.model.phone_prefix();
    t.model.tax_name();
    t.model.secure_medical_forms();
    t.model.debrand_logo();
    t.model.default_search();
    t.model.calendar_version();
    t.model.contact_term_singular();
    t.model.contact_term_plural();
    t.model.flag_enabled();
    t.model.lock_prescription();
    t.model.show_report_logo();
    t.model.rota_version();
    t.model.use_google_auth();
    t.model.employee_clock_track();
    t.model.slug();
    t.model.default_inv_template_id();
    t.model.diagnosis_codes_type();
    t.model.append_client_pref();
    t.model.capital_surname();
    t.model.disable_prescriptions();
    t.model.cycles_display();
    t.model.enable_sens_data();
    t.model.class_term_singular();
    t.model.class_term_plural();
    t.model.sensitive_data_question();
    t.model.legacy_consultations();
    t.model.class_teacher_singular();
    t.model.employee_term_singular();
    t.model.employee_term_plural();
    t.model.medical_approvals();
    t.model.new_reports();
    t.model.merge_bookings_tabs();
    t.model.preferences_sms();
    t.model.preferences_email();
    t.model.preferences_post();
    t.model.preferences_newsletters();
    t.model.healthcode_live();
    t.model.lock_export();
    t.model.language();
    t.model.completed_setup();
    t.model.timezone();
  },
});

export const companyDetailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.companyDetails();
    t.crud.companyDetails({ filtering: true, ordering: true });

    t.field('companyDetailsCount', {
      type: 'Int',
      args: {
        where: 'CompanyDetailsWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.companyDetails.count(args);
      },
    });
  },
});

export const companyDetailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompanyDetails();
    t.crud.updateOneCompanyDetails();
    t.crud.upsertOneCompanyDetails();
    t.crud.deleteOneCompanyDetails();

    t.crud.updateManyCompanyDetails();
    t.crud.deleteManyCompanyDetails();
  },
});
