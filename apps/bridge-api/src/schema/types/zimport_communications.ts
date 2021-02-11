import { objectType, extendType } from 'nexus';

export const zimport_communications = objectType({
  name: 'zimport_communications',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.contact_id();
    t.model.subject();
    t.model.content();
    t.model.date_created();
    t.model.email();
    t.model.communication_type();
    t.model.custom_user_name();
    t.model.custom_id();
    t.model.mobile();
    t.model.added();
    t.model.file_name();
    t.model.status_name();
    t.model.custom_modified_by();
  },
});

export const zimport_communicationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_communications();
    t.crud.zimport_communications({ filtering: true, ordering: true });
  },
});

export const zimport_communicationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_communications();
    t.crud.updateOnezimport_communications();
    t.crud.upsertOnezimport_communications();
    t.crud.deleteOnezimport_communications();

    t.crud.updateManyzimport_communications();
    t.crud.deleteManyzimport_communications();
  },
});
