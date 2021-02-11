import { objectType, extendType } from 'nexus';

export const medical_form_triggers = objectType({
  name: 'medical_form_triggers',
  definition(t) {
    t.model.id();
    t.model.trigger_name();
    t.model.action();
    t.model.company_id();
    t.model.medical_triggers();
    t.model.creation_date();
    t.model.form_status();
    t.model.form_email();
    t.model.form_email_subject();
    t.model.form_email_body();
    t.model.form_alert_note();
    t.model.form_task_name();
    t.model.form_task_description();
    t.model.form_assigned_to();
    t.model.medical_form_prescriber();
    t.model.form_task_priority();
    t.model.form_sms_no();
    t.model.form_sms_body();
    t.model.formulae_operation();
    t.model.is_active();
    t.model.medical_condition();
  },
});

export const medical_form_triggersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_triggers();
    t.crud.medical_form_triggers({ filtering: true, ordering: true });
  },
});

export const medical_form_triggersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_triggers();
    t.crud.updateOnemedical_form_triggers();
    t.crud.upsertOnemedical_form_triggers();
    t.crud.deleteOnemedical_form_triggers();

    t.crud.updateManymedical_form_triggers();
    t.crud.deleteManymedical_form_triggers();
  },
});
