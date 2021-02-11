import { objectType, extendType } from 'nexus';

export const checkin_averages_idle = objectType({
  name: 'checkin_averages_idle',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.uid();
    t.model.avg();
    t.model.retailutilisation_avg();
  },
});

export const checkin_averages_idleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkin_averages_idle();
    t.crud.checkin_averages_idles({ filtering: true, ordering: true });
  },
});

export const checkin_averages_idleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecheckin_averages_idle();
    t.crud.updateOnecheckin_averages_idle();
    t.crud.upsertOnecheckin_averages_idle();
    t.crud.deleteOnecheckin_averages_idle();

    t.crud.updateManycheckin_averages_idle();
    t.crud.deleteManycheckin_averages_idle();
  },
});
