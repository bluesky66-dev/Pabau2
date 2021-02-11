import { objectType, extendType } from 'nexus';

export const lead_status = objectType({
  name: 'lead_status',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.status_name();
    t.model.status_order();
    t.model.email_template_id();
    t.model.email_template_from();
    t.model.is_default();
    t.model.is_convert();
  },
});

export const lead_statusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_status();
    t.crud.lead_statuses({ filtering: true, ordering: true });
  },
});

export const lead_statusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_status();
    t.crud.updateOnelead_status();
    t.crud.upsertOnelead_status();
    t.crud.deleteOnelead_status();

    t.crud.updateManylead_status();
    t.crud.deleteManylead_status();
  },
});
