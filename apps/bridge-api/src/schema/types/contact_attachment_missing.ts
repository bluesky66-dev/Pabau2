import { objectType, extendType } from 'nexus';

export const contact_attachment_missing = objectType({
  name: 'contact_attachment_missing',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.file_name();
    t.model.date();
    t.model.missing();
  },
});

export const contact_attachment_missingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_attachment_missing();
    t.crud.contact_attachment_missings({ filtering: true, ordering: true });
  },
});

export const contact_attachment_missingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_attachment_missing();
    t.crud.updateOnecontact_attachment_missing();
    t.crud.upsertOnecontact_attachment_missing();
    t.crud.deleteOnecontact_attachment_missing();

    t.crud.updateManycontact_attachment_missing();
    t.crud.deleteManycontact_attachment_missing();
  },
});
