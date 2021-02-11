import { objectType, extendType } from 'nexus';

export const lead_status_templates = objectType({
  name: 'lead_status_templates',
  definition(t) {
    t.model.id();
    t.model.status_id();
    t.model.keyword();
    t.model.template_id();
    t.model.company_id();
  },
});

export const lead_status_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_status_templates();
    t.crud.lead_status_templates({ filtering: true, ordering: true });
  },
});

export const lead_status_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_status_templates();
    t.crud.updateOnelead_status_templates();
    t.crud.upsertOnelead_status_templates();
    t.crud.deleteOnelead_status_templates();

    t.crud.updateManylead_status_templates();
    t.crud.deleteManylead_status_templates();
  },
});
