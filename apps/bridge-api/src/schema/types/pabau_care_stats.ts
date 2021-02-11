import { objectType, extendType } from 'nexus';

export const pabau_care_stats = objectType({
  name: 'pabau_care_stats',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.entry_date();
    t.model.general_clients();
    t.model.general_leads();
    t.model.general_financials();
    t.model.general_emails();
    t.model.general_sms();
    t.model.general_total();
    t.model.marketing_sms();
    t.model.marketing_newsletter();
    t.model.marketing_survey();
    t.model.marketing_birthday();
    t.model.marketing_total();
    t.model.paperless_consent();
    t.model.paperless_medical();
    t.model.paperless_treatment();
    t.model.paperless_precare();
    t.model.paperless_aftercare();
    t.model.paperless_online();
    t.model.paperless_photo();
    t.model.paperless_documents();
    t.model.paperless_total();
    t.model.website_leads();
    t.model.website_online();
    t.model.stock_inventory();
    t.model.stock_purchase();
    t.model.stock_total();
    t.model.pabau_score();
    t.model.manual_service_satisfaction();
    t.model.manual_training_satisfaction();
    t.model.overall_satisfaction();
    t.model.green_flags();
    t.model.red_flags();
    t.model.amber_flags();
    t.model.grand_total_score();
    t.model.money_stripe();
    t.model.money_recall();
    t.model.money_sms();
    t.model.contact_count();
    t.model.consent_count();
    t.model.medical_history_count();
    t.model.treatment_note_count();
    t.model.precare_count();
    t.model.aftercare_count();
    t.model.photos_count();
    t.model.online_form_count();
    t.model.documents_count();
    t.model.bookings_count();
    t.model.leads_count();
    t.model.bookings_create_count();
    t.model.finance_count();
    t.model.stripe_fees_count();
    t.model.stripe_fees_activity();
    t.model.full_contact_count();
    t.model.total_sms_campaign();
    t.model.total_newsletter_campaign();
    t.model.total_surveys();
    t.model.total_recalls();
    t.model.total_birthdays();
    t.model.tickets_total_created();
    t.model.tickets_total_solved();
    t.model.tickets_total_open();
    t.model.tickets_01();
    t.model.tickets_18();
    t.model.tickets_824();
    t.model.tickets_24();
    t.model.survey_hits();
    t.model.photo_uploader_hits();
    t.model.sms_refer();
    t.model.sms_referee();
  },
});

export const pabau_care_statsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_care_stats();
    t.crud.pabau_care_stats({ filtering: true, ordering: true });
  },
});

export const pabau_care_statsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_care_stats();
    t.crud.updateOnepabau_care_stats();
    t.crud.upsertOnepabau_care_stats();
    t.crud.deleteOnepabau_care_stats();

    t.crud.updateManypabau_care_stats();
    t.crud.deleteManypabau_care_stats();
  },
});
