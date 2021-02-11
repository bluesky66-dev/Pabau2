import { objectType, extendType } from 'nexus';

export const waiting_list = objectType({
  name: 'waiting_list',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.expires_on();
    t.model.remove_on();
    t.model.name();
    t.model.appointment();
    t.model.monday();
    t.model.tuesday();
    t.model.wednesday();
    t.model.thursday();
    t.model.friday();
    t.model.saturday();
    t.model.sunday();
    t.model.comments();
    t.model.notify_sms();
    t.model.notify_email();
    t.model.created_date();
    t.model.modified_date();
    t.model.available_from();
    t.model.available_to();
    t.model.preference();
    t.model.urgent();
  },
});

export const waiting_listQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_list();
    t.crud.waiting_lists({ filtering: true, ordering: true });
  },
});

export const waiting_listMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_list();
    t.crud.updateOnewaiting_list();
    t.crud.upsertOnewaiting_list();
    t.crud.deleteOnewaiting_list();

    t.crud.updateManywaiting_list();
    t.crud.deleteManywaiting_list();
  },
});
