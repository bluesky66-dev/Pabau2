import { objectType, extendType } from 'nexus';

export const nhs_form = objectType({
  name: 'nhs_form',
  definition(t) {
    t.model.id();
    t.model.user_deleted();
    t.model.name();
    t.model.data();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.nhs_procedure_id();
    t.model.locked();
    t.model.printout();
  },
});

export const nhs_formQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_form();
    t.crud.nhs_forms({ filtering: true, ordering: true });
  },
});

export const nhs_formMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_form();
    t.crud.updateOnenhs_form();
    t.crud.upsertOnenhs_form();
    t.crud.deleteOnenhs_form();

    t.crud.updateManynhs_form();
    t.crud.deleteManynhs_form();
  },
});
