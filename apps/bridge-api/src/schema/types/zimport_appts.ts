import { objectType, extendType } from 'nexus';

export const zimport_appts = objectType({
  name: 'zimport_appts',
  definition(t) {
    t.model.id();
    t.model.time();
    t.model.custom_id();
    t.model.custom_contact_name();
    t.model.custom_user_name();
    t.model.custom_category();
    t.model.custom_service();
    t.model.custom_room();
    t.model.custom_type();
    t.model.added();
    t.model.title();
  },
});

export const zimport_apptsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_appts();
    t.crud.zimport_appts({ filtering: true, ordering: true });
  },
});

export const zimport_apptsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_appts();
    t.crud.updateOnezimport_appts();
    t.crud.upsertOnezimport_appts();
    t.crud.deleteOnezimport_appts();

    t.crud.updateManyzimport_appts();
    t.crud.deleteManyzimport_appts();
  },
});
