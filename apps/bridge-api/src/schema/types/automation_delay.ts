import { objectType, extendType } from 'nexus';

export const automation_delay = objectType({
  name: 'automation_delay',
  definition(t) {
    t.model.id();
    t.model.action_rows();
    t.model.data_array();
    t.model.code();
    t.model.company();
    t.model.delay();
    t.model.date_queued();
    t.model.appointment_id();
  },
});

export const automation_delayQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_delay();
    t.crud.automation_delays({ filtering: true, ordering: true });
  },
});

export const automation_delayMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_delay();
    t.crud.updateOneautomation_delay();
    t.crud.upsertOneautomation_delay();
    t.crud.deleteOneautomation_delay();

    t.crud.updateManyautomation_delay();
    t.crud.deleteManyautomation_delay();
  },
});
