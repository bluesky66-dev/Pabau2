import { objectType, extendType } from 'nexus';

export const kp_setting = objectType({
  name: 'kp_setting',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.fixed_cost();
  },
});

export const kp_settingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.kp_setting();
    t.crud.kp_settings({ filtering: true, ordering: true });
  },
});

export const kp_settingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnekp_setting();
    t.crud.updateOnekp_setting();
    t.crud.upsertOnekp_setting();
    t.crud.deleteOnekp_setting();

    t.crud.updateManykp_setting();
    t.crud.deleteManykp_setting();
  },
});
