import { objectType, extendType } from 'nexus';

export const communications = objectType({
  name: 'communications',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.from_address();
    t.model.uid();
    t.model.location_id();
    t.model.type();
    t.model.secure();
    t.model.date();
    t.model.communications_content_id();
    t.model.related_id();
    t.model.related_type();
    t.model.communications_content();
    t.model.communications_recipients();
  },
});

export const communicationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communications();
    t.crud.communications({ filtering: true, ordering: true });
  },
});

export const communicationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunications();
    t.crud.updateOnecommunications();
    t.crud.upsertOnecommunications();
    t.crud.deleteOnecommunications();

    t.crud.updateManycommunications();
    t.crud.deleteManycommunications();
  },
});
