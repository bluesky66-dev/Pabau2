import { objectType, extendType } from 'nexus';

export const permission_templates = objectType({
  name: 'permission_templates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
    t.model.app_permissions();
    t.model.user_permissions();
    t.model.mobile_permissions();
    t.model.mobile_widgets();
    t.model.disabled_services();
    t.model.alerts();
    t.model.is_admin();
    t.model.enabled_reports();
    t.model.all_reports();
  },
});

export const permission_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.permission_templates();
    t.crud.permission_templates({ filtering: true, ordering: true });
  },
});

export const permission_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepermission_templates();
    t.crud.updateOnepermission_templates();
    t.crud.upsertOnepermission_templates();
    t.crud.deleteOnepermission_templates();

    t.crud.updateManypermission_templates();
    t.crud.deleteManypermission_templates();
  },
});
