import { objectType, extendType } from 'nexus';

export const scanner_settings = objectType({
  name: 'scanner_settings',
  definition(t) {
    t.model.occupier();
    t.model.defaultpoints();
    t.model.rule1();
    t.model.rule1occurance();
    t.model.rule1campaign();
    t.model.rule2();
    t.model.rule2occurance();
    t.model.rule2campaign();
    t.model.id();
  },
});

export const scanner_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scanner_settings();
    t.crud.scanner_settings({ filtering: true, ordering: true });
  },
});

export const scanner_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescanner_settings();
    t.crud.updateOnescanner_settings();
    t.crud.upsertOnescanner_settings();
    t.crud.deleteOnescanner_settings();

    t.crud.updateManyscanner_settings();
    t.crud.deleteManyscanner_settings();
  },
});
