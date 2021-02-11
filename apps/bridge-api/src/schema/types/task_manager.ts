import { objectType, extendType } from 'nexus';

export const task_manager = objectType({
  name: 'task_manager',
  definition(t) {
    t.model.id();
    t.model.task_owner();
    t.model.subject();
    t.model.due_date();
    t.model.assigned_to();
    t.model.module_type();
    t.model.contact_id();
    t.model.lead_id();
    t.model.module2_type();
    t.model.user2_id();
    t.model.status();
    t.model.priority();
    t.model.send_notification_email();
    t.model.recurring_activity();
    t.model.start_date();
    t.model.end_date();
    t.model.repeat_type();
    t.model.description();
    t.model.occupier();
    t.model.created_date();
    t.model.modified_date();
    t.model.closed_date();
    t.model.nhs_patient_id();
    t.model.list_id();
    t.model.notify_on_complete();
    t.model.imported();
  },
});

export const task_managerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.task_manager();
    t.crud.task_managers({ filtering: true, ordering: true });
  },
});

export const task_managerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetask_manager();
    t.crud.updateOnetask_manager();
    t.crud.upsertOnetask_manager();
    t.crud.deleteOnetask_manager();

    t.crud.updateManytask_manager();
    t.crud.deleteManytask_manager();
  },
});
