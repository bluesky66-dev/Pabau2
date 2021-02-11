import { objectType, extendType } from 'nexus';

export const engage_connects_followup = objectType({
  name: 'engage_connects_followup',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.group_id();
    t.model.send_time();
  },
});

export const engage_connects_followupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_connects_followup();
    t.crud.engage_connects_followups({ filtering: true, ordering: true });
  },
});

export const engage_connects_followupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_connects_followup();
    t.crud.updateOneengage_connects_followup();
    t.crud.upsertOneengage_connects_followup();
    t.crud.deleteOneengage_connects_followup();

    t.crud.updateManyengage_connects_followup();
    t.crud.deleteManyengage_connects_followup();
  },
});
