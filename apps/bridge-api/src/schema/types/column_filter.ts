import { objectType, extendType } from 'nexus';

export const column_filter = objectType({
  name: 'column_filter',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.filter_type();
    t.model.filter_data();
  },
});

export const column_filterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.column_filter();
    t.crud.column_filters({ filtering: true, ordering: true });
  },
});

export const column_filterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecolumn_filter();
    t.crud.updateOnecolumn_filter();
    t.crud.upsertOnecolumn_filter();
    t.crud.deleteOnecolumn_filter();

    t.crud.updateManycolumn_filter();
    t.crud.deleteManycolumn_filter();
  },
});
