import { objectType, extendType } from 'nexus';

export const commission_sheet = objectType({
  name: 'commission_sheet',
  definition(t) {
    t.model.id();
    t.model.sheet_name();
    t.model.company_id();
    t.model.description();
    t.model.type();
  },
});

export const commission_sheetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.commission_sheet();
    t.crud.commission_sheets({ filtering: true, ordering: true });
  },
});

export const commission_sheetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommission_sheet();
    t.crud.updateOnecommission_sheet();
    t.crud.upsertOnecommission_sheet();
    t.crud.deleteOnecommission_sheet();

    t.crud.updateManycommission_sheet();
    t.crud.deleteManycommission_sheet();
  },
});
