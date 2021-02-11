import { objectType, extendType } from 'nexus';

export const rota_templates = objectType({
  name: 'rota_templates',
  definition(t) {
    t.model.rota_template_id();
    t.model.is_active();
    t.model.template_name();
    t.model.start_time();
    t.model.end_time();
    t.model.days();
    t.model.company_id();
  },
});

export const rota_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rota_templates();
    t.crud.rota_templates({ filtering: true, ordering: true });
  },
});

export const rota_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerota_templates();
    t.crud.updateOnerota_templates();
    t.crud.upsertOnerota_templates();
    t.crud.deleteOnerota_templates();

    t.crud.updateManyrota_templates();
    t.crud.deleteManyrota_templates();
  },
});
