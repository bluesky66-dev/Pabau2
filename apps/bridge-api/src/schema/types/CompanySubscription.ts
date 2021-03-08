import { objectType, extendType } from 'nexus';

export const CompanySubscription = objectType({
  name: 'CompanySubscription',
  definition(t) {
    t.model.license_id();
    t.model.company_id();
    t.model.company();
    t.model.license_type();
    t.model.license_expiry();
    t.model.active();
    t.model.code();
    t.model.max_user_count();
    t.model.uid();
    t.model.suspend_sms();
    t.model.sms_rate();
    t.model.setup_stage();
    t.model.disable_sms();
    t.model.payment_id();
    t.model.warning_level();
    t.model.subscription_name();
    t.model.subscription_fee();
    t.model.suspended_on();
    t.model.demo_account();
    t.model.suspension_reason();
    t.model.pabau_score();
    t.model.gc_email();
    t.model.payment_bounces();
    t.model.training_status();
    t.model.setup_status();
    t.model.order_sheet();
    t.model.complete_account();
    t.model.complete_notes();
    t.model.details_status();
    t.model.training_date();
    t.model.bill_cycle();
    t.model.renew_interval();
    t.model.exclude_reports();
    t.model.sub_start_date();
    t.model.price_range();
    t.model.stripe_customer_id();
    t.model.stripe_subscription_id();
    t.model.trial();
    t.model.storage();
    t.model.free_users();
    t.model.gc_customer_id();
    t.model.low_credit_amount();
    t.model.low_sms_action();
    t.model.activity_logs();
    t.model.account_live();
    t.model.discount();
    t.model.gc_plan_id();
    t.model.support_plan();
    t.model.support_fee();
    t.model.gc_support_plan_id();
    t.model.enterprise_user_cost();
    t.model.gc_enterprise_plan_id();
    t.model.enterprise_fee();
    t.model.gc_amount();
    t.model.leave_alert();
    t.model.stripe_fee();
    t.model.stripe_fee_type();
    t.model.previous_system();
    t.model.am_group();
    t.model.phone_support();
    t.model.slack_support();
    t.model.whatsapp_support();
    t.model.multiple_locations();
    t.model.commission_rate();
    t.model.live_server();
    t.model.sandbox_server();
    t.model.server_comp_id();
    t.model.partner_id();
    t.model.advanced_marketing_addon();
    t.model.free_months();
    t.model.hide_in_comps();
    t.model.am_start_date();
    t.model.trainer_id();
    t.model.onboarder_id();
    t.model.is_referral();
  },
});

export const companySubscriptionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.companySubscription();
    t.crud.companySubscriptions({ filtering: true, ordering: true });

    t.field('companySubscriptionsCount', {
      type: 'Int',
      args: {
        where: 'CompanySubscriptionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.companySubscription.count(args);
      },
    });
  },
});

export const companySubscriptionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompanySubscription();
    t.crud.updateOneCompanySubscription();
    t.crud.upsertOneCompanySubscription();
    t.crud.deleteOneCompanySubscription();

    t.crud.updateManyCompanySubscription();
    t.crud.deleteManyCompanySubscription();
  },
});
