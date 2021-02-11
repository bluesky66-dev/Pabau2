import { objectType, extendType } from 'nexus';

export const lead_capture_fields = objectType({
  name: 'lead_capture_fields',
  definition(t) {
    t.model.id();
    t.model.lead_capture_id();
    t.model.first_name();
    t.model.last_name();
    t.model.home_phone();
    t.model.mobile();
    t.model.email();
    t.model.address();
    t.model.post_code();
    t.model.company_id();
    t.model.how_heard();
    t.model.dob();
    t.model.custom_dropdown();
    t.model.custom_textarea();
    t.model.custom_date();
    t.model.yesorno();
    t.model.custom_textfield();
    t.model.custom_textfield2();
  },
});

export const lead_capture_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_capture_fields();
    t.crud.lead_capture_fields({ filtering: true, ordering: true });
  },
});

export const lead_capture_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_capture_fields();
    t.crud.updateOnelead_capture_fields();
    t.crud.upsertOnelead_capture_fields();
    t.crud.deleteOnelead_capture_fields();

    t.crud.updateManylead_capture_fields();
    t.crud.deleteManylead_capture_fields();
  },
});
