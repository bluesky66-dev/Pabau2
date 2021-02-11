import { objectType, extendType } from 'nexus';

export const zroom_import_helper = objectType({
  name: 'zroom_import_helper',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.room_name();
    t.model.occupier();
  },
});

export const zroom_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zroom_import_helper();
    t.crud.zroom_import_helpers({ filtering: true, ordering: true });
  },
});

export const zroom_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezroom_import_helper();
    t.crud.updateOnezroom_import_helper();
    t.crud.upsertOnezroom_import_helper();
    t.crud.deleteOnezroom_import_helper();

    t.crud.updateManyzroom_import_helper();
    t.crud.deleteManyzroom_import_helper();
  },
});
