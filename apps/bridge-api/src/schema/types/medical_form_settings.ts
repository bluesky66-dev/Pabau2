import { objectType, extendType } from 'nexus';

export const medical_form_settings = objectType({
  name: 'medical_form_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.prescriptions_email_id();
    t.model.treatments_email_id();
    t.model.consents_email_id();
    t.model.col_drug_name();
    t.model.col_drug_dose();
    t.model.col_drug_units();
    t.model.col_drug_freq();
    t.model.col_drug_lot();
    t.model.col_drug_exp();
    t.model.col_drug_route();
    t.model.col_drug_comm();
    t.model.col_drug_name_label();
    t.model.col_drug_dose_label();
    t.model.col_drug_units_label();
    t.model.col_drug_freq_label();
    t.model.col_drug_lot_label();
    t.model.col_drug_exp_label();
    t.model.col_drug_route_label();
    t.model.col_drug_comm_label();
    t.model.delivery_address();
    t.model.show_delivery_address();
    t.model.headings_on_top();
    t.model.presc_stat_text_ontop();
    t.model.treatment_plan_email_id();
    t.model.prepopulate();
  },
});

export const medical_form_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_settings();
    t.crud.medical_form_settings({ filtering: true, ordering: true });
  },
});

export const medical_form_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_settings();
    t.crud.updateOnemedical_form_settings();
    t.crud.upsertOnemedical_form_settings();
    t.crud.deleteOnemedical_form_settings();

    t.crud.updateManymedical_form_settings();
    t.crud.deleteManymedical_form_settings();
  },
});
