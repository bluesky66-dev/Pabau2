import { objectType, extendType } from 'nexus';

export const log_call = objectType({
  name: 'log_call',
  definition(t) {
    t.model.id();
    t.model.subject();
    t.model.call_type();
    t.model.call_purpose();
    t.model.call_from_or_to();
    t.model.user_id();
    t.model.lead_id();
    t.model.related_to();
    t.model.reminder_id();
    t.model.related_to_text();
    t.model.call_detail_type();
    t.model.call_start_date();
    t.model.call_time_hour();
    t.model.call_time_min();
    t.model.call_time_format();
    t.model.call_duration_hr();
    t.model.call_duration_min();
    t.model.call_duration_sec();
    t.model.description();
    t.model.billable();
    t.model.call_result();
    t.model.occupier();
    t.model.ownerid();
    t.model.created_date();
    t.model.modified_date();
    t.model.site_section();
  },
});

export const log_callQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.log_call();
    t.crud.log_calls({ filtering: true, ordering: true });
  },
});

export const log_callMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelog_call();
    t.crud.updateOnelog_call();
    t.crud.upsertOnelog_call();
    t.crud.deleteOnelog_call();

    t.crud.updateManylog_call();
    t.crud.deleteManylog_call();
  },
});
