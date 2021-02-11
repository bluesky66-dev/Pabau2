import { objectType, extendType } from 'nexus';

export const contact_meta = objectType({
  name: 'contact_meta',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.meta_name();
    t.model.meta_value();
  },
});

export const contact_metaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_meta();
    t.crud.contact_metas({ filtering: true, ordering: true });
  },
});

export const contact_metaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_meta();
    t.crud.updateOnecontact_meta();
    t.crud.upsertOnecontact_meta();
    t.crud.deleteOnecontact_meta();

    t.crud.updateManycontact_meta();
    t.crud.deleteManycontact_meta();
  },
});
