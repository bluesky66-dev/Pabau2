import { objectType, extendType } from 'nexus';

export const report_category = objectType({
  name: 'report_category',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.occupier();
    t.model.type();
    t.model.colour();
  },
});

export const report_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_category();
    t.crud.report_categories({ filtering: true, ordering: true });
  },
});

export const report_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_category();
    t.crud.updateOnereport_category();
    t.crud.upsertOnereport_category();
    t.crud.deleteOnereport_category();

    t.crud.updateManyreport_category();
    t.crud.deleteManyreport_category();
  },
});
