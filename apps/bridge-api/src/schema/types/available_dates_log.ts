import { objectType, extendType } from 'nexus';

export const available_dates_log = objectType({
  name: 'available_dates_log',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.uid();
    t.model.date();
    t.model.start();
    t.model.end();
  },
});

export const available_dates_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.available_dates_log();
    t.crud.available_dates_logs({ filtering: true, ordering: true });
  },
});

export const available_dates_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneavailable_dates_log();
    t.crud.updateOneavailable_dates_log();
    t.crud.upsertOneavailable_dates_log();
    t.crud.deleteOneavailable_dates_log();

    t.crud.updateManyavailable_dates_log();
    t.crud.deleteManyavailable_dates_log();
  },
});
