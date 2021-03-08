import { objectType, arg, extendType } from 'nexus'

export const BookitProGeneral = objectType({
  name: 'BookitProGeneral',
  definition(t) {
    t.model.id()
    t.model.occupier()
    t.model.advance_time()
    t.model.enable_payments()
    t.model.paypal_address()
    t.model.receive_email()
    t.model.create_invoice()
    t.model.deposit()
    t.model.show_prices()
    t.model.show_duration()
    t.model.show_description()
    t.model.header_color()
    t.model.booking_emails()
    t.model.online_color()
    t.model.warning_message()
    t.model.allow_cancel()
    t.model.disable_facebook()
    t.model.interval()
    t.model.disable_extra_information()
    t.model.coupon_active()
    t.model.payment_api_url()
    t.model.account_deposit()
    t.model.replace_job_titles()
    t.model.hide_facebook_share()
    t.model.enable_bookings()
    t.model.default_payment()
    t.model.registration_optional()
    t.model.consultations_only()
    t.model.only_existing()
    t.model.stripe_reciever()
    t.model.stripe_public_key()
    t.model.stripe_private_key()
    t.model.offline_message()
    t.model.disable_locations()
    t.model.theme()
    t.model.promo_codes()
    t.model.terms_conditions()
    t.model.ga_analytics()
    t.model.gt_manager()
    t.model.fb_code()
    t.model.fb_event()
    t.model.doc_shared_template()
    t.model.classes_email_confirm()
    t.model.sage_vendor()
    t.model.sage_username()
    t.model.sage_password()
    t.model.gc_public_key()
    t.model.gc_private_key()
    t.model.enable_title()
    t.model.group_by_region()
    t.model.use_new_connect()
    t.model.disable_reviews()
    t.model.allow_rating()
    t.model.show_cat_photos()
    t.model.class_columns()
    t.model.no_vat_prices()
    t.model.integration_method()
    t.model.rolling_deposit()
    t.model.one_touch_book()
    t.model.new_stripe()
    t.model.enable_master_cat()
    t.model.stripe_fee()
    t.model.reccuring_search_btn()
    t.model.force_new_existing_patient()
    t.model.redirect_url()
    t.model.connect_url()
  },
})

export const bookitProGeneralQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookitProGeneral()
    t.field('findFirstBookitProGeneral', {
      type: 'BookitProGeneral',
      args: {
        where: 'BookitProGeneralWhereInput',
        orderBy: arg({ type: 'BookitProGeneralOrderByInput' }),
        cursor: 'BookitProGeneralWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookitProGeneral.findFirst(args as any)
      },
    })
    t.crud.bookitProGenerals({ filtering: true, ordering: true })
    t.field('bookitProGeneralsCount', {
      type: 'Int',
      args: {
        where: 'BookitProGeneralWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookitProGeneral.count(args as any)
      },
    })
  },
})

export const bookitProGeneralMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBookitProGeneral()
    t.crud.updateOneBookitProGeneral()
    t.crud.upsertOneBookitProGeneral()
    t.crud.deleteOneBookitProGeneral()
    t.crud.updateManyBookitProGeneral()
    t.crud.deleteManyBookitProGeneral()
  },
})
