import { objectType, extendType } from 'nexus';

export const company_services_backup = objectType({
  name: 'company_services_backup',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.service();
    t.model.duration();
    t.model.description();
    t.model.price();
    t.model.disabledusers();
    t.model.color();
    t.model.group_id();
    t.model.online_book();
    t.model.product_id();
    t.model.imported();
    t.model.communication_template();
    t.model.service_order();
    t.model.sms_mode();
    t.model.sms_name();
    t.model.sms_days_after();
    t.model.sms_send_time();
    t.model.sms_id();
    t.model.treatment_group_id();
    t.model.custom_id();
    t.model.pos_only();
    t.model.prep_time();
    t.model.finish_time();
    t.model.deposit_amount();
    t.model.friendly_name();
    t.model.max_clients();
    t.model.default_room_id();
    t.model.follow_up_period();
    t.model.deposit_type();
    t.model.max_models();
    t.model.availability();
  },
});

export const company_services_backupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_backup();
    t.crud.company_services_backups({ filtering: true, ordering: true });
  },
});

export const company_services_backupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_backup();
    t.crud.updateOnecompany_services_backup();
    t.crud.upsertOnecompany_services_backup();
    t.crud.deleteOnecompany_services_backup();

    t.crud.updateManycompany_services_backup();
    t.crud.deleteManycompany_services_backup();
  },
});
