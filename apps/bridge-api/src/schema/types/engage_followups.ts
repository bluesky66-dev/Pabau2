import { objectType, extendType } from 'nexus';

export const engage_followups = objectType({
  name: 'engage_followups',
  definition(t) {
    t.model.id();
    t.model.service_id();
    t.model.sms_template();
    t.model.email_template();
    t.model.followup_period();
    t.model.followup_method();
    t.model.contacts();
    t.model.created_date();
    t.model.completed();
  },
});

export const engage_followupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_followups();
    t.crud.engage_followups({ filtering: true, ordering: true });
  },
});

export const engage_followupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_followups();
    t.crud.updateOneengage_followups();
    t.crud.upsertOneengage_followups();
    t.crud.deleteOneengage_followups();

    t.crud.updateManyengage_followups();
    t.crud.deleteManyengage_followups();
  },
});
