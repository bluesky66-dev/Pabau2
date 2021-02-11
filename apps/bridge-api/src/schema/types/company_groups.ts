import { objectType, extendType } from 'nexus';

export const company_groups = objectType({
  name: 'company_groups',
  definition(t) {
    t.model.ID();
    t.model.Name();
    t.model.occupier();
    t.model.category_product_id();
    t.model.cat_order();
    t.model.image();
    t.model.online_enabled();
    t.model.group_color();
    t.model.import_id();
    t.model.equipment_id();
    t.model.deposit_amount();
    t.model.tax_id();
    t.model.master_cat_id();
    t.model.company_position_id();
  },
});

export const company_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_groups();
    t.crud.company_groups({ filtering: true, ordering: true });
  },
});

export const company_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_groups();
    t.crud.updateOnecompany_groups();
    t.crud.upsertOnecompany_groups();
    t.crud.deleteOnecompany_groups();

    t.crud.updateManycompany_groups();
    t.crud.deleteManycompany_groups();
  },
});
