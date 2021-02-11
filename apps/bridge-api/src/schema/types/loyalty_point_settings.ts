import { objectType, extendType } from 'nexus';

export const loyalty_point_settings = objectType({
  name: 'loyalty_point_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.status();
    t.model.amount();
    t.model.created_date();
    t.model.modified_date();
    t.model.points_value();
    t.model.show_on_receipt();
  },
});

export const loyalty_point_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_point_settings();
    t.crud.loyalty_point_settings({ filtering: true, ordering: true });
  },
});

export const loyalty_point_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_point_settings();
    t.crud.updateOneloyalty_point_settings();
    t.crud.upsertOneloyalty_point_settings();
    t.crud.deleteOneloyalty_point_settings();

    t.crud.updateManyloyalty_point_settings();
    t.crud.deleteManyloyalty_point_settings();
  },
});
