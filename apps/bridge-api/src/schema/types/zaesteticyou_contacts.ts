import { objectType, extendType } from 'nexus';

export const zaesteticyou_contacts = objectType({
  name: 'zaesteticyou_contacts',
  definition(t) {
    t.model.id();
    t.model.A();
    t.model.B();
    t.model.C();
    t.model.D();
    t.model.E();
    t.model.status();
    t.model.status_client();
    t.model.contact_name();
    t.model.service_name();
    t.model.title();
    t.model.start_date();
    t.model.end_date();
    t.model.custom_user();
    t.model.custom_user_name2();
  },
});

export const zaesteticyou_contactsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zaesteticyou_contacts();
    t.crud.zaesteticyou_contacts({ filtering: true, ordering: true });
  },
});

export const zaesteticyou_contactsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezaesteticyou_contacts();
    t.crud.updateOnezaesteticyou_contacts();
    t.crud.upsertOnezaesteticyou_contacts();
    t.crud.deleteOnezaesteticyou_contacts();

    t.crud.updateManyzaesteticyou_contacts();
    t.crud.deleteManyzaesteticyou_contacts();
  },
});
