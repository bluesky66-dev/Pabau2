import { objectType, extendType } from 'nexus';

export const nhs_import = objectType({
  name: 'nhs_import',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.name();
  },
});

export const nhs_importQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_import();
    t.crud.nhs_imports({ filtering: true, ordering: true });
  },
});

export const nhs_importMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_import();
    t.crud.updateOnenhs_import();
    t.crud.upsertOnenhs_import();
    t.crud.deleteOnenhs_import();

    t.crud.updateManynhs_import();
    t.crud.deleteManynhs_import();
  },
});
