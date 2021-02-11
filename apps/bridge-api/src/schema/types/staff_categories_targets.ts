import { objectType, extendType } from 'nexus';

export const staff_categories_targets = objectType({
  name: 'staff_categories_targets',
  definition(t) {
    t.model.id();
    t.model.staff_id();
    t.model.cat_id();
    t.model.value();
    t.model.occupier();
    t.model.created_date();
    t.model.last_updated_date();
  },
});

export const staff_categories_targetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_categories_targets();
    t.crud.staff_categories_targets({ filtering: true, ordering: true });
  },
});

export const staff_categories_targetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_categories_targets();
    t.crud.updateOnestaff_categories_targets();
    t.crud.upsertOnestaff_categories_targets();
    t.crud.deleteOnestaff_categories_targets();

    t.crud.updateManystaff_categories_targets();
    t.crud.deleteManystaff_categories_targets();
  },
});
