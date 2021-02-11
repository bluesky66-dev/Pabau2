import { objectType, extendType } from 'nexus';

export const zimport_rota = objectType({
  name: 'zimport_rota',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.uid();
    t.model.staff_id();
    t.model.date();
    t.model.start_time();
    t.model.end_time();
    t.model.break_start();
    t.model.break_end();
    t.model.start_date();
    t.model.end_date();
    t.model.notes();
    t.model.custom_user_id();
    t.model.custom_user_name();
    t.model.custom_location_id();
    t.model.location_id();
    t.model.added();
  },
});

export const zimport_rotaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_rota();
    t.crud.zimport_rotas({ filtering: true, ordering: true });
  },
});

export const zimport_rotaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_rota();
    t.crud.updateOnezimport_rota();
    t.crud.upsertOnezimport_rota();
    t.crud.deleteOnezimport_rota();

    t.crud.updateManyzimport_rota();
    t.crud.deleteManyzimport_rota();
  },
});
