import { objectType, extendType } from 'nexus';

export const rota_repeats = objectType({
  name: 'rota_repeats',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.shift_start();
    t.model.shift_end();
    t.model.repeat_start();
    t.model.repeat_end();
    t.model.day_sun();
    t.model.day_mon();
    t.model.day_tue();
    t.model.day_wed();
    t.model.day_thu();
    t.model.day_fri();
    t.model.day_sat();
    t.model.every();
    t.model.unit();
  },
});

export const rota_repeatsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rota_repeats();
    t.crud.rota_repeats({ filtering: true, ordering: true });
  },
});

export const rota_repeatsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerota_repeats();
    t.crud.updateOnerota_repeats();
    t.crud.upsertOnerota_repeats();
    t.crud.deleteOnerota_repeats();

    t.crud.updateManyrota_repeats();
    t.crud.deleteManyrota_repeats();
  },
});
