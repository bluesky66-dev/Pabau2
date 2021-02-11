import { objectType, extendType } from 'nexus';

export const work_category = objectType({
  name: 'work_category',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.parent();
  },
});

export const work_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.work_category();
    t.crud.work_categories({ filtering: true, ordering: true });
  },
});

export const work_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnework_category();
    t.crud.updateOnework_category();
    t.crud.upsertOnework_category();
    t.crud.deleteOnework_category();

    t.crud.updateManywork_category();
    t.crud.deleteManywork_category();
  },
});
