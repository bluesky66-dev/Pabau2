import { objectType, extendType } from 'nexus';

export const scheduler_backup = objectType({
  name: 'scheduler_backup',
  definition(t) {
    t.model.id();
    t.model.status();
    t.model.subject();
    t.model.sentby();
    t.model.source();
    t.model.to();
    t.model.companyid();
    t.model.email_by();
    t.model.message();
    t.model.date();
    t.model.communication_type();
    t.model.contact_id();
    t.model.site_section();
    t.model.sch_date();
    t.model.sch_time();
    t.model.the_status();
    t.model.template_id();
    t.model.relate_id();
    t.model.unique_id();
    t.model.imported();
  },
});

export const scheduler_backupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scheduler_backup();
    t.crud.scheduler_backups({ filtering: true, ordering: true });
  },
});

export const scheduler_backupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescheduler_backup();
    t.crud.updateOnescheduler_backup();
    t.crud.upsertOnescheduler_backup();
    t.crud.deleteOnescheduler_backup();

    t.crud.updateManyscheduler_backup();
    t.crud.deleteManyscheduler_backup();
  },
});
