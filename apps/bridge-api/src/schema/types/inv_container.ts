import { objectType, extendType } from 'nexus';

export const inv_container = objectType({
  name: 'inv_container',
  definition(t) {
    t.model.id();
    t.model.reference_no();
    t.model.container_name();
    t.model.note();
    t.model.occupier();
    t.model.uid();
    t.model.created_by();
    t.model.modified_by();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_containerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_container();
    t.crud.inv_containers({ filtering: true, ordering: true });
  },
});

export const inv_containerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_container();
    t.crud.updateOneinv_container();
    t.crud.upsertOneinv_container();
    t.crud.deleteOneinv_container();

    t.crud.updateManyinv_container();
    t.crud.deleteManyinv_container();
  },
});
