import { objectType, extendType } from 'nexus';

export const cm_rota_custom = objectType({
  name: 'cm_rota_custom',
  definition(t) {
    t.model.id();
    t.model.rota_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.imported();
  },
});

export const cm_rota_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_rota_custom();
    t.crud.cm_rota_customs({ filtering: true, ordering: true });
  },
});

export const cm_rota_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_rota_custom();
    t.crud.updateOnecm_rota_custom();
    t.crud.upsertOnecm_rota_custom();
    t.crud.deleteOnecm_rota_custom();

    t.crud.updateManycm_rota_custom();
    t.crud.deleteManycm_rota_custom();
  },
});
