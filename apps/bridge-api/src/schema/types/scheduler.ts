import { objectType, extendType } from 'nexus';

export const scheduler = objectType({
  name: 'scheduler',
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

export const schedulerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scheduler();
    t.crud.schedulers({ filtering: true, ordering: true });
  },
});

export const schedulerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescheduler();
    t.crud.updateOnescheduler();
    t.crud.upsertOnescheduler();
    t.crud.deleteOnescheduler();

    t.crud.updateManyscheduler();
    t.crud.deleteManyscheduler();
  },
});
