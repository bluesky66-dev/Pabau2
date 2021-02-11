import { objectType, extendType } from 'nexus';

export const pabau_config = objectType({
  name: 'pabau_config',
  definition(t) {
    t.model.id();
    t.model.cal_live();
    t.model.cal_beta();
    t.model.pos_beta();
    t.model.pos_live();
    t.model.rota_live();
    t.model.rota_beta();
  },
});

export const pabau_configQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_config();
    t.crud.pabau_configs({ filtering: true, ordering: true });
  },
});

export const pabau_configMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_config();
    t.crud.updateOnepabau_config();
    t.crud.upsertOnepabau_config();
    t.crud.deleteOnepabau_config();

    t.crud.updateManypabau_config();
    t.crud.deleteManypabau_config();
  },
});
