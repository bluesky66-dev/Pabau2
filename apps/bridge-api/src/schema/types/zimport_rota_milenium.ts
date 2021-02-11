import { objectType, extendType } from 'nexus';

export const zimport_rota_milenium = objectType({
  name: 'zimport_rota_milenium',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_user_name();
    t.model.date_week();
    t.model.monday();
    t.model.tuesday();
    t.model.wednesday();
    t.model.thursday();
    t.model.friday();
    t.model.saturday();
    t.model.sunday();
    t.model.added();
  },
});

export const zimport_rota_mileniumQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_rota_milenium();
    t.crud.zimport_rota_mileniums({ filtering: true, ordering: true });
  },
});

export const zimport_rota_mileniumMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_rota_milenium();
    t.crud.updateOnezimport_rota_milenium();
    t.crud.upsertOnezimport_rota_milenium();
    t.crud.deleteOnezimport_rota_milenium();

    t.crud.updateManyzimport_rota_milenium();
    t.crud.deleteManyzimport_rota_milenium();
  },
});
