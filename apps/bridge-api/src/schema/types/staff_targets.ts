import { objectType, extendType } from 'nexus';

export const staff_targets = objectType({
  name: 'staff_targets',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.retail_sales();
    t.model.service_sales();
    t.model.new_clients();
    t.model.utilization();
    t.model.UID();
  },
});

export const staff_targetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_targets();
    t.crud.staff_targets({ filtering: true, ordering: true });
  },
});

export const staff_targetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_targets();
    t.crud.updateOnestaff_targets();
    t.crud.upsertOnestaff_targets();
    t.crud.deleteOnestaff_targets();

    t.crud.updateManystaff_targets();
    t.crud.deleteManystaff_targets();
  },
});
