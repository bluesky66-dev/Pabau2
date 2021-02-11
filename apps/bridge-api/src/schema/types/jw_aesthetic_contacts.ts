import { objectType, extendType } from 'nexus';

export const jw_aesthetic_contacts = objectType({
  name: 'jw_aesthetic_contacts',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.patient_no();
  },
});

export const jw_aesthetic_contactsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.jw_aesthetic_contacts();
    t.crud.jw_aesthetic_contacts({ filtering: true, ordering: true });
  },
});

export const jw_aesthetic_contactsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnejw_aesthetic_contacts();
    t.crud.updateOnejw_aesthetic_contacts();
    t.crud.upsertOnejw_aesthetic_contacts();
    t.crud.deleteOnejw_aesthetic_contacts();

    t.crud.updateManyjw_aesthetic_contacts();
    t.crud.deleteManyjw_aesthetic_contacts();
  },
});
