import { objectType, extendType } from 'nexus';

export const pabau_debug_tue = objectType({
  name: 'pabau_debug_tue',
  definition(t) {
    t.model.company_id();
    t.model.filename();
    t.model.hits();
    t.model.peak_memory();
    t.model.cpu_usage_time();
    t.model.exec_usage_time();
    t.model.id();
  },
});

export const pabau_debug_tueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_debug_tue();
    t.crud.pabau_debug_tues({ filtering: true, ordering: true });
  },
});

export const pabau_debug_tueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_debug_tue();
    t.crud.updateOnepabau_debug_tue();
    t.crud.upsertOnepabau_debug_tue();
    t.crud.deleteOnepabau_debug_tue();

    t.crud.updateManypabau_debug_tue();
    t.crud.deleteManypabau_debug_tue();
  },
});
