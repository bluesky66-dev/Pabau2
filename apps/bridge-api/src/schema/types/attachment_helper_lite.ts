import { objectType, extendType } from 'nexus';

export const attachment_helper_lite = objectType({
  name: 'attachment_helper_lite',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.f();
    t.model.x();
    t.model.type();
  },
});

export const attachment_helper_liteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.attachment_helper_lite();
    t.crud.attachment_helper_lites({ filtering: true, ordering: true });
  },
});

export const attachment_helper_liteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneattachment_helper_lite();
    t.crud.updateOneattachment_helper_lite();
    t.crud.upsertOneattachment_helper_lite();
    t.crud.deleteOneattachment_helper_lite();

    t.crud.updateManyattachment_helper_lite();
    t.crud.deleteManyattachment_helper_lite();
  },
});
